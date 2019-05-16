FROM mcr.microsoft.com/dotnet/core/sdk:2.2-alpine as dev

WORKDIR /app

#ENV ASPNETCORE_URLS http://0.0.0.0:5000
EXPOSE 5000-5001

ENTRYPOINT [ "dotnet" ]

CMD [ "watch", "run", "--urls", "https://0.0.0.0:5000"]

FROM dev as build

RUN dotnet build \
 && dotnet publish

CMD [ "app.dll" ]