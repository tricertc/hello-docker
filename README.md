# Hello Docker

## Build your image and run a container

```
docker build -t hello-docker .
docker run --name hello-docker-1 --env PORT=80 -p "3000:80" -d hello-docker
```

Then go to http://localhost:3000 in your browser.

### View logs

```
docker logs hello-docker-1
```

### Access the shell
```
docker exec -it hello-docker-1 sh
```

Type **exit** to leave shell

### Stop the running container

```
docker stop hello-docker-1
```

### Cleanup the container and image

Stop the container first if it is running.

```
docker rm hello-docker-1
docker rmi hello-docker
```