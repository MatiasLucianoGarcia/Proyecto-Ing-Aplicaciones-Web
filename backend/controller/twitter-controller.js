'use strict'
const twitterservice = require('../services/twitter-service');

var controller={

    getTweets: function(req,res){
        let user = req.params.user;

        twitterservice.getTweetByUserName(user).then(response=>{
            return res.status(200).send(response);
        }).catch(err=>{
            if(err) return res.status(400).send({message:'No se pudieron recuperar los tweets'});
        })
    }
}

module.exports= controller;