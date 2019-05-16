# Description

ASP.NET Core web application.

## How to Run/Stop

* start: `docker-compose -f .\docker\docker-compose.yml up`
* stop: `docker-compose -f .\docker\docker-compose.yml down`

## How to Make a new ASP.NET App from Docker

The following command was used to generate the files in the `src` directory initially. It can be a good command when you want to 
make a new ASP.NET web project without installing .NET Core on your host machine and you already have Docker installed. Just be sure to change -v, -w, and --name flags to something suitable for your project.

```powershell
docker run -v "C:\Users\kshabazz\Projects\razor-cockpit-express\src:/app" -w "/app" --entrypoint=dotnet mcr.microsoft.com/dotnet/core/sdk:2.2 new web
```

## References

* [Nginx Reverse Proxy to ASP.NET Core – Separate Docker Containers](https://www.sep.com/sep-blog/2017/02/27/nginx-reverse-proxy-to-asp-net-core-separate-docker-containers/)
* [Develop ASP.NET Core Applications in a Container](https://github.com/dotnet/dotnet-docker/blob/master/samples/aspnetapp/aspnet-docker-dev-in-container.md)
* [Docker dotnet watch run error: Unable to bind to https://localhost:5000 on the IPv6 loopback interface](https://stackoverflow.com/questions/51188774/docker-dotnet-watch-run-error-unable-to-bind-to-https-localhost5000-on-the-i)
* [Configuring SSL On An Asp.Net Core Docker Container](https://dev.to/herocod3r/configuring-ssl-on-an-aspnet-core-docker-container-1c9l)
* [Host ASP.NET Core on Linux with Nginx](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2)