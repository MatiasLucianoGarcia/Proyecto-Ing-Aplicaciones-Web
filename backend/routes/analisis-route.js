'use strict'
const express= require('express')
const controller = require('../controller/analisis-controller')
const router = express.Router();

router.get('/analisis/:user?', controller.getAnalisis);

module.exports=router;