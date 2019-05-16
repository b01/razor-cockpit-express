FROM mcr.microsoft.com/dotnet/core/sdk:2.2-alpine3.9 as dev

RUN apk -q --progress --purge --no-cache upgrade \
 && apk --no-progress --purge --no-cache add --upgrade --virtual devDeps \
    nodejs-current \
    yarn \
 && node -v \
 && yarn -v \
 && apk -q --progress --purge --no-cache upgrade \
 && rm -vrf /var/cache/apk/*

WORKDIR /app

ENTRYPOINT [ "dotnet" ]

CMD [ "watch", "run"]

# ---- BUILD

FROM dev as build

RUN dotnet build \
 && dotnet publish

CMD [ "app.dll" ]