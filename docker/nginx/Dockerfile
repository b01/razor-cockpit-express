FROM alpine:3.9

COPY ./docker/nginx/generate-self-signed-cert.sh /usr/bin/

# 1. Quietly upgrade existing packages (no-cache).
# 2. Install packages (no-cache).
# 3. Generate a self-signed cert.
# 4. Direct all NGinX logs to system out.
# 5. Clean-up.
RUN apk -q --progress --purge --no-cache upgrade \
 && apk --no-progress --purge --no-cache add --upgrade \
    curl \
    nginx \
    openssl \
 && chmod a+x /usr/bin/generate-self-signed-cert.sh \
 && source generate-self-signed-cert.sh \
 && ln -sf /dev/stdout /var/log/nginx/access.log \
 && ln -sf /dev/stderr /var/log/nginx/error.log \
 && nginx -v \
 && apk -q --progress --purge --no-cache upgrade \
 && rm -vrf /var/cache/apk/*

COPY ./docker/nginx/custom-nginx.conf /etc/nginx/

ENTRYPOINT [ "nginx" ]

CMD [ "-c", "/etc/nginx/custom-nginx.conf" ]
