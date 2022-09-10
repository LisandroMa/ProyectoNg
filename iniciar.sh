#! /usr/bin/bash
# Guarda que uso un volumen de docker llamado midb y un container de docker llamado mipostgre.... no vaya a ser que te pise algo
# hay que eliminarlos despues ... lo hago con limpieza.sh

cd servidordb
echo "Crear Volumen"
sudo docker volume create midb
echo "Crear container Postgres"
sudo docker run -d \
	--name mipostgre \
	--network host \
 	-e POSTGRES_USER=postgres \
	-e POSTGRES_PASSWORD=mipw \
	-e POSTGRES_DB=mibase \
	-v midb:/var/lib/postgresql/data \
	-v "$PWD/my-postgres.conf":/etc/postgresql/postgresql.conf \
	--expose 5432 \
	postgres \
	-c 'config_file=/etc/postgresql/postgresql.conf'
echo "Bindear DB Prueba"
sudo docker cp ./usda.sql mipostgre:/docker-entrypoint-initdb.d/usda.sql

echo "Crear Container Servidor API"
cd ..
cd servidorAPI
sudo docker run -d \
	--name servidorAPI \
	--network host \
	-v "$PWD":/app \
	--expose 8000 \
	node:18.5 \
	node /app/index.js
cd .. 
cd ming
ng serve
cd ..
