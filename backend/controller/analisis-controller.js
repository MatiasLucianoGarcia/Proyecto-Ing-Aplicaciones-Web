const analisis = require('../models/analisis');
const twitterservice = require('../services/twitter-service');
const watsonservice = require('../services/watson-service');

var controller={
    getAnalisisComplete: function(req,res){
        let user = req.params.user;
        
        twitterservice.getTweetByUserName(user).then(response=>{
            let texto;
            let tweets= response;
            tweets.forEach(function(tweet){
                texto +=tweet.full_text+' - '; 
            });
            watsonservice.analyzeText(texto).then(response=>{
                tones= response.document_tone.tone_categories.tones;
                miAnalisis = new analisis(user,tweets[0].profile_image_url_https,tones[0].score,tones[1].score,tones[2].score,tones[3].score,tones[4].score);
                res.status(200).send(miAnalisis);
            }).catch(err=>{
                res.status(400).send({message:'Lo sentimos, no podemos analizar los datos de este usario.'});
            });
        }).catch(err=>{
            res.status(400).send({message:'Lo sentimos, no podemos recuperar los datos de este usario.'});
        });
    }
}

module.exports=controller;