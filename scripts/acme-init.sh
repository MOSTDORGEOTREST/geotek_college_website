#!/usr/bin/env bash
set -euo pipefail

ACME_DOMAIN="${ACME_DOMAIN:-geotekcollege.ru}"
ACME_EMAIL="${ACME_EMAIL:-sheepdolly2023@gmail.com}"
ACME_NAME="${ACME_NAME:-DMITRII}"
CERT_DIR="${CERT_DIR:-cert}"
CERT_PATH="${CERT_DIR}/fullchain.pem"
KEY_PATH="${CERT_DIR}/privkey.pem"
TEMP_MARKER="${CERT_DIR}/.temporary"

log() {
  printf '%s\n' "$*"
}

detect_compose() {
  if docker compose version >/dev/null 2>&1; then
    COMPOSE=(docker compose)
  elif command -v docker-compose >/dev/null 2>&1; then
    COMPOSE=(docker-compose)
  else
    log "Docker Compose is required, but neither 'docker compose' nor 'docker-compose' was found."
    exit 1
  fi
}

public_keys_match() {
  local cert_pub key_pub
  cert_pub="$(mktemp)"
  key_pub="$(mktemp)"

  if openssl x509 -pubkey -noout -in "$1" > "$cert_pub" &&
    openssl pkey -in "$2" -pubout > "$key_pub" &&
    cmp -s "$cert_pub" "$key_pub"; then
    rm -f "$cert_pub" "$key_pub"
    return 0
  fi

  rm -f "$cert_pub" "$key_pub"
  return 1
}

valid_certificate_pair() {
  test -s "$CERT_PATH" &&
    test -s "$KEY_PATH" &&
    openssl x509 -checkend 86400 -noout -in "$CERT_PATH" >/dev/null &&
    openssl pkey -in "$KEY_PATH" -noout >/dev/null &&
    public_keys_match "$CERT_PATH" "$KEY_PATH"
}

create_temporary_certificate() {
  mkdir -p "$CERT_DIR"
  log "Creating temporary self-signed certificate for ${ACME_DOMAIN}."

  openssl req \
    -x509 \
    -nodes \
    -newkey rsa:2048 \
    -days "${TEMP_CERT_DAYS:-3}" \
    -subj "/CN=${ACME_DOMAIN}/O=Temporary ACME fallback" \
    -keyout "${KEY_PATH}.tmp" \
    -out "${CERT_PATH}.tmp"

  chmod 600 "${KEY_PATH}.tmp"
  chmod 644 "${CERT_PATH}.tmp"
  mv "${KEY_PATH}.tmp" "$KEY_PATH"
  mv "${CERT_PATH}.tmp" "$CERT_PATH"
  touch "$TEMP_MARKER"
}

ensure_startable_certificate() {
  if valid_certificate_pair; then
    log "Existing nginx certificate pair is usable."
    return
  fi

  log "Existing nginx certificate pair is missing or invalid."
  create_temporary_certificate
}

install_certificate_from_lineage() {
  "${COMPOSE[@]}" run --rm --entrypoint /bin/sh certbot /scripts/install-certificate.sh
}

start_nginx_for_webroot() {
  "${COMPOSE[@]}" up -d app nginx
}

reload_nginx() {
  if "${COMPOSE[@]}" ps --status running nginx | grep -q nginx; then
    "${COMPOSE[@]}" exec -T nginx nginx -t
    "${COMPOSE[@]}" exec -T nginx nginx -s reload
  fi
}

certbot_common_args=(
  certonly
  --non-interactive
  --agree-tos
  --no-eff-email
  --email "$ACME_EMAIL"
  --user-agent-comment "$ACME_NAME"
  --rsa-key-size 4096
  --keep-until-expiring
  --cert-name "$ACME_DOMAIN"
  -d "$ACME_DOMAIN"
)

issue_with_webroot() {
  log "Trying ACME webroot challenge for ${ACME_DOMAIN}."
  "${COMPOSE[@]}" run --rm --entrypoint certbot certbot \
    "${certbot_common_args[@]}" \
    --webroot \
    -w /var/www/certbot \
    --deploy-hook "/bin/sh /scripts/install-certificate.sh"
}

issue_with_standalone() {
  log "Trying ACME standalone challenge for ${ACME_DOMAIN}."
  "${COMPOSE[@]}" stop nginx || true

  docker run --rm \
    -p 80:80 \
    -v "${PWD}/certbot/conf:/etc/letsencrypt" \
    -v "${PWD}/certbot/www:/var/www/certbot" \
    certbot/certbot:latest \
    "${certbot_common_args[@]}" \
    --standalone \
    --preferred-challenges http
}

main() {
  detect_compose
  mkdir -p "$CERT_DIR" certbot/conf certbot/www

  ensure_startable_certificate
  start_nginx_for_webroot

  if install_certificate_from_lineage; then
    log "Installed existing Let's Encrypt lineage."
    reload_nginx
  elif issue_with_webroot; then
    if install_certificate_from_lineage; then
      reload_nginx
    else
      log "ACME webroot issue succeeded, but installing the certificate failed. Nginx keeps the current certificate."
    fi
  elif issue_with_standalone; then
    "${COMPOSE[@]}" up -d nginx
    if install_certificate_from_lineage; then
      reload_nginx
    else
      log "ACME standalone issue succeeded, but installing the certificate failed. Nginx was restarted with the current certificate."
    fi
  else
    log "ACME issuance failed. Nginx will keep serving the temporary certificate."
    "${COMPOSE[@]}" up -d nginx
  fi

  "${COMPOSE[@]}" up -d certbot
  log "ACME initialization finished."
}

if [ "${ACME_SOURCE_ONLY:-0}" != "1" ]; then
  main "$@"
fi
