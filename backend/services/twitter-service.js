const Twitter = require('twitter');
const auth = require('../auth')

let client = new Twitter({
    consumer_key: auth.twitter.consumer_key,
    consumer_secret: auth.twitter.consumer_secret,
    access_token_key: auth.twitter.access_token_key,
    access_token_secret: auth.twitter.access_token_secret
}); 

async function getTweetByUserName(user){
	return new Promise ((reject, resolve) => {
		//Parametros necesarios para la consulta a la API
    	//200 Es el numero maximo de tweets que puedo pedir
		let params={
            screen_name: user,
            count:'200',
            exclude_replies:'true',
            include_rts:'false'
        }
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if (error){
				reject(error)
			}else{
                resolve(tweets);
            }
            		
    	}); 
	});
}


module.exports={getTweetByUserName};