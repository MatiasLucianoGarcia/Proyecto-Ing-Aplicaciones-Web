const twitterService = require('./twitter-service'); 

var test = twitterService.getTweetByUserName('juandimatz').then(response => {
    console.log(response)
}).catch(err =>{console.log(err)})