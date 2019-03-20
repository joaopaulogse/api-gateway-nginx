# API-GATEWAY Basic with Nginx

> Run in docker
```bash 
$ docker-compose up
```

# Service 1
- Port: 3001 (Not exposed)

# Service 2
- Port: 3002 (Not exposed)

# Nginx
- Port: 3000 (exposed)
  - /service1 -> Service 1
  - /service2 -> Service 2
  - / -> Not Found (404)
