#! /usr/bin/bash
# script de limpieza... guarda con que no te borre algo tuyo

sudo docker container stop servidorAPI
sudo docker container rm servidorAPI
sudo docker container stop mipostgre
sudo docker container rm mipostgre
sudo docker volume rm midb

