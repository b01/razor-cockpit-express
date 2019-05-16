FROM alpine

COPY ./docker/nginx/generate-self-signed-cert.sh /usr/bin/

RUN apk add \
    curl \
    nginx \
    openssl \
 && ls /usr/bin/ \
 && env \
 && chmod a+x /usr/bin/generate-self-signed-cert.sh \
 && source generate-self-signed-cert.sh

COPY ./docker/nginx/custom-nginx.conf /etc/nginx/

ENTRYPOINT [ "nginx" ]

CMD [ "-c", "/etc/nginx/custom-nginx.conf" ]
