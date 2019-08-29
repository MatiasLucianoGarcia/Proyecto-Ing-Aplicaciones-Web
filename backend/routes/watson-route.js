'use strict'
const express= require('express')
const controller = require('../controller/watson-controller')
const router = express.Router();

router.get('/tone/:text?', controller.getTones);

module.exports=router;