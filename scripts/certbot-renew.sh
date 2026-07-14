#!/bin/sh
set -eu

trap 'exit 0' TERM INT

while :; do
  certbot renew \
    --webroot \
    -w /var/www/certbot \
    --deploy-hook "/bin/sh /scripts/install-certificate.sh"

  sleep 12h &
  wait $!
done
