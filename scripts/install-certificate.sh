#!/bin/sh
set -eu

DOMAIN="${ACME_DOMAIN:-geotekcollege.ru}"
LIVE_DIR="/etc/letsencrypt/live/${DOMAIN}"
CERT_SRC="${LIVE_DIR}/fullchain.pem"
KEY_SRC="${LIVE_DIR}/privkey.pem"
CERT_DST="/etc/nginx/certs/fullchain.pem"
KEY_DST="/etc/nginx/certs/privkey.pem"

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

validate_pair() {
  cert_path="$1"
  key_path="$2"

  test -s "$cert_path"
  test -s "$key_path"
  openssl x509 -checkend 604800 -noout -in "$cert_path"
  openssl pkey -in "$key_path" -noout >/dev/null
  public_keys_match "$cert_path" "$key_path"
}

if ! validate_pair "$CERT_SRC" "$KEY_SRC"; then
  log "ACME certificate for ${DOMAIN} is missing, expired soon, or does not match its key."
  exit 1
fi

mkdir -p "$(dirname "$CERT_DST")"
cp "$CERT_SRC" "${CERT_DST}.tmp"
cp "$KEY_SRC" "${KEY_DST}.tmp"
chmod 644 "${CERT_DST}.tmp"
chmod 600 "${KEY_DST}.tmp"

if ! validate_pair "${CERT_DST}.tmp" "${KEY_DST}.tmp"; then
  rm -f "${CERT_DST}.tmp" "${KEY_DST}.tmp"
  log "Copied certificate pair failed validation; existing nginx certificate was left unchanged."
  exit 1
fi

mv "${CERT_DST}.tmp" "$CERT_DST"
mv "${KEY_DST}.tmp" "$KEY_DST"
rm -f /etc/nginx/certs/.temporary

log "Installed ACME certificate for ${DOMAIN}."
