#!/bin/sh
set -eu

DOMAIN="${ACME_DOMAIN:-geotekcollege.ru}"
CERT_DIR="/etc/nginx/certs"
CERT_PATH="${CERT_DIR}/fullchain.pem"
KEY_PATH="${CERT_DIR}/privkey.pem"
TEMP_MARKER="${CERT_DIR}/.temporary"

log() {
  printf '%s\n' "$*"
}

public_keys_match() {
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
    openssl x509 -checkend 86400 -noout -in "$CERT_PATH" &&
    openssl pkey -in "$KEY_PATH" -noout >/dev/null &&
    public_keys_match "$CERT_PATH" "$KEY_PATH"
}

create_temporary_certificate() {
  mkdir -p "$CERT_DIR"
  log "Creating temporary self-signed certificate for ${DOMAIN}."

  openssl req \
    -x509 \
    -nodes \
    -newkey rsa:2048 \
    -days "${TEMP_CERT_DAYS:-3}" \
    -subj "/CN=${DOMAIN}/O=Temporary ACME fallback" \
    -keyout "${KEY_PATH}.tmp" \
    -out "${CERT_PATH}.tmp"

  chmod 600 "${KEY_PATH}.tmp"
  chmod 644 "${CERT_PATH}.tmp"
  mv "${KEY_PATH}.tmp" "$KEY_PATH"
  mv "${CERT_PATH}.tmp" "$CERT_PATH"
  touch "$TEMP_MARKER"
}

if ! valid_certificate_pair; then
  create_temporary_certificate
fi

nginx -t

(
  while :; do
    sleep 12h
    nginx -t && nginx -s reload
  done
) &

exec nginx -g "daemon off;"
