'use strict'
const express= require('express')
const controller = require('../controller/twitter-controller')
const router = express.Router();

router.get('/tweets/:user?', controller.getTweets);

module.exports=router;