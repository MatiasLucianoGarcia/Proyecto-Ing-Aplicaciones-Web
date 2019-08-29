'use strict'
const watsonservice = require('../services/watson-service');

var controller={
    getTones: function(req,res){
        let text = req.params.text;

        watsonservice.analyzeText(text).then(response=>{
            return res.status(200).send(response);
        }).catch(err=>{
            if(err) return res.status(400).send(err);
        });
    }
};

module.exports=controller;