'use strict'
const analisis = require('../models/analisis');
const twitterservice = require('../services/twitter-service');
const watsonservice = require('../services/watson-service') 

//Creacion de un objeto de prueba

/* let myAnalisis= new analisis('Matias', 'https://img.com',0.23,0.2,0.1,0.047,0.756);

console.log(myAnalisis); */

async function usarTodo(user){
    try{
        let tweets = await twitterservice.getTweetByUserName(user);
        let cadenaTwetts;
        tweets.forEach(function(tweet){
            cadenaTwetts += tweet.full_text+" - ";
        });
        let analisis = await watsonservice.analyzeText(cadenaTwetts); 

        console.log(JSON.stringify(analisis,null,2));
        
    }
    catch(err){
        console.log(`Fallo. Error: ${err}`);
    }
}

usarTodo('matifuckthat');