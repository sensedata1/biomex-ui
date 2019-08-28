# BiOMEX User Interface

## Build and deploy to localhost.

Builds the docker container and tags it into the local registry.

```
./gradlew clean buildDocker
```

Run the docker container.

```
docker run -it -p 80:8080 $(docker images | grep biomex-ui | awk '{print $3}')
```

Browse to http://localhost
