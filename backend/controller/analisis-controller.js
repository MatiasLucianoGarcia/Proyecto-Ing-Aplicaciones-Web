const analisis = require('../models/analisis');
const twitterservice = require('../services/twitter-service');
const watsonservice = require('../services/watson-service');

var controller={
    getAnalisisComplete: function(req,res){
        var user = req.params.user;
        var coleccionTweets;
        var coleccionDeAnalisis;
        twitterservice.getTweetByUserName(user).then(response => 
            {
                coleccionTweets=response;
                coleccionTweets.forEach(function(tweet){
                    watsonservice.analyzeText(tweet.full_text).then(result=>{
                        var cats =result.document_tone.tone_categories[0];
                        var myAnalisis = new analisis(user,tweet.user.profile_image_url_https,cats.tones[0].score,cats.tones[1].score,cats.tones[2].score,cats.tones[3].score,cats.tones[4].score);
                        console.log(myAnalisis);
                        coleccionDeAnalisis.push(myAnalisis);
                    }).catch(err=>{res.status(400).send({message:'Error en el de watson'});});
                });
                res.status(200).send(coleccionDeAnalisis);
            }).catch(err=>{res.status(400).send({message:'Error en el de twitter'});});
    }
}

module.exports=controller;