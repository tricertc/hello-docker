# Hello Docker

This runs two docker containers, one is a web project and the other is an API.  The web project makes calls to the API to retrieve data.  This demo shows how to use docker-compose to bring up multiple containers and how communicate with each other.

## Using docker-compose

### Starting containers
```
docker-compose up
```

or for detatched mode (runs containers in background, puts you back at prompt)

```
docker-compose up -d
```

### Viewing results

* http://localhost:8081/message shows the API endpoint that the web will hit
* http://localhost:8080 shows the web displaying the API result.

### Stopping containers

```
docker-compose stop
```