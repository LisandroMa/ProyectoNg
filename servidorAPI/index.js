const { Pool } = require('pg')
const express = require('express')
const app = express()

const pool = new Pool({
    host: '127.0.0.1',
    user: 'postgres',
    password: 'mipw',
    database: 'mibase',
    port: 5432,
})

app.get('/',(req,res) => {
    pool.connect((err,cliente,release) => {
        if (err) {
            return console.log('Error creando cliente por consulta root',err.stack)
        }
         // TODO: CONTROLAR QUE SEA UNA SOLICITUD CORRECTA
        cliente.query('SELECT * FROM information_schema.tables', (err,result) => {
            release()
            if (err) {
                return console.log('Error en respuesta de query a root')
            }
            res.send ('API de prueba, en URI comidas devuelve ndb_no, long_desc y fat_factor')
        })
    })
})

app.get('/comidas/:Minfat-:Maxfat',(req,res) => {
    pool.connect((err,cliente,release) => {
        if (err) {
            return console.log('Error creando cliente por consulta minmax',err.stack)
        }
         // TODO: CONTROLAR QUE SEA UNA SOLICITUD CORRECTA
        cliente.query('SELECT ndb_no, long_desc, fat_factor FROM food_des WHERE (fat_factor > ' + req.params.Minfat + ' AND fat_factor < ' + req.params.Maxfat + ') LIMIT 10;', (err,result) => {
            release()
            if (err) {
                return console.log('Error en respuesta de query a minmax',err.stack)
            }
            res.send (result.rows)
        })
    })
})

app.post('/comidas/:ndb-:long-:fat',(req,res) => {
    pool.connect((err,cliente,release) => {
        if (err) {
            return console.log('Error creando cliente para post',err.stack)
        }
        // TODO: CONTROLAR QUE SEA UNA SOLICITUD CORRECTA
        cliente.query('INSERT INTO food_des (ndb_no, long_desc, fat_factor, fdgrp_cd, shrt_desc) VALUES (' + req.params.ndb + ', \'' + req.params.long + '\', ' + req.params.fat +',0, \'AA\');', (err,result) => {
            release()
            if (err) {
                return console.log('Error intentando INSERT',err.stack)
            }
            res.send ('ACEPTADO: (' + req.params.ndb + ', ' + req.params.long + ', ' + req.params.fat +');')
        })
    })
})

app.put('/comidas/:ndb-:fat',(req,res) => {
    pool.connect((err,cliente,release) => {
        if (err) {
            return console.log('Error creando cliente para PUT',err.stack)
        }
        // TODO: CONTROLAR QUE SEA UNA SOLICITUD CORRECTA
        cliente.query('UPDATE food_des SET fat_factor = ' + req.params.fat + ' WHERE (ndb_no = \'' + req.params.ndb + '\');', (err,result) => {
            release()
            if (err) {
                res.send ('Error intentando UPDATE' + err.stack)
                return console.log('Error intentando UPDATE',err.stack)
            }
            res.send ('MODIFICADO: (' + req.params.ndb + ', ' + req.params.long + ', ' + req.params.fat +');')
        })
    })
})


app.delete('/comidas/:ndb',(req,res) => {
    pool.connect((err,cliente,release) => {
        if (err) {
            return console.log('Error creando cliente para delete',err.stack)
        }
        cliente.query('DELETE FROM food_des WHERE (ndb_no = \'' + req.params.ndb + '\');', (err,result) => {
            release()
            if (err) {
                return console.log('Error intentando DELETE',err.stack)
            }
            res.send ('BORRADO: (' + req.params.ndb + ')')
        })
    })
})

app.listen(8000)
