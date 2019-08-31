const analisis = require('../models/analisis');
const twitterservice = require('../services/twitter-service');
const watsonservice = require('../services/watson-service');

var hola;
twitterservice.getTweetByUserName('juandimatz').then(response => 
    {   hola = response;
        var texto;
        hola.forEach(function(tweet){
            watsonservice.analyzeText(tweet.full_text).then(response=>{
              var cats =response.document_tone.tone_categories[0];
              for (var i=0;i<=4;i++){
                    console.log(JSON.stringify(cats.tones[i].tone_id));
                  console.log(JSON.stringify(cats.tones[i].score));
                  console.log("--------------------------------")
              }
                /* console.log(JSON.stringify(response, null, 2)); */
            }).catch(err=>{console.log("Fallo!")});
        });  
    }).catch(err=>{console.log(err)});