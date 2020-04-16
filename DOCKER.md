sudo docker ps 

sudo docker run \
--name postgres \
-e POSTGRES_USER=silvaij16 \
-e POSTGRES_PASSWORD=melhorcom846521 \
-e POSTGRES_DB=melhorcom \
-p 5432:5432 \
-d \
postgres (até aqui copiar e colar no terminal)

sudo docker ps 

sudo docker exec -it postgres /bin/bash (entra no container e roda qulquer comando lá dentro)

exit (sair)

sudo docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

localhost:8080 (no navegador)