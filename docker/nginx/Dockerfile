FROM alpine

RUN apk add nginx

COPY ./docker/nginx/custom-nginx.conf /etc/nginx/

ENTRYPOINT [ "nginx" ]

CMD [ "-c", "/etc/nginx/custom-nginx.conf" ]
