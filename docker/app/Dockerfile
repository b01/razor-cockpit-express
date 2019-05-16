FROM mcr.microsoft.com/dotnet/core/sdk:2.2-alpine as dev

WORKDIR /app

ENTRYPOINT [ "dotnet" ]

CMD [ "watch", "run"]

FROM dev as build

RUN dotnet build \
 && dotnet publish

CMD [ "app.dll" ]