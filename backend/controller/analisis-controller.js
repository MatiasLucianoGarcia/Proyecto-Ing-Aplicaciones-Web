const analisis = require('../models/analisis');
const twitterservice = require('../services/twitter-service');
const watsonservice = require('../services/watson-service');

var controller={
    getAnalisis: async function(req,res){
        try{
            var user = req.params.user;
            var coleccionTweets;
            var textToAnalize; 
            coleccionTweets = await twitterservice.getTweetByUserName(user);
            coleccionTweets.forEach(function(tweet){
                textToAnalize += tweet.full_text + ' - ';
            });
            var objectAnalisis = await watsonservice.analyzeText(textToAnalize);
            var sentimientos = objectAnalisis.document_tone.tone_categories[0];
            var personalidad = objectAnalisis.document_tone.tone_categories[2];
            var myAnalisis = new analisis(user,coleccionTweets[0].user.profile_image_url,sentimientos.tones[0].score,sentimientos.tones[1].score,sentimientos.tones[2].score,sentimientos.tones[3].score,sentimientos.tones[4].score,personalidad.tones[0].score,personalidad.tones[1].score,personalidad.tones[2].score,personalidad.tones[3].score,personalidad.tones[4].score,);
            console.log("PITOOOO");
            console.log(JSON.stringify(objectAnalisis,null,2));
            console.log(JSON.stringify(sentimientos,null,2));
            console.log(sentimientos);
            console.log(JSON.stringify(myAnalisis)); 
            res.status(200).send({myAnalisis});
        }
        catch(error){
            console.log("Entro al error " + error);
            res.status(400).send(error);
        }    
    }
}

module.exports=controller;