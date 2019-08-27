'use strict'

var express= require('express');
var bodyParser= require('body-parser');

var app= express();

//Carga Archivos Rutas

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//Rutas

module.exports= app;