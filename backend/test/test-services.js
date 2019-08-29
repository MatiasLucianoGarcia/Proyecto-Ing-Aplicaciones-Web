const watsonservice = require('../services/watson-service');

texto= 'Los mas sabios y los mas tontos son los unicos que no se alteran';
texto2= 'Solo se puede ser valiente cuando en verdad se tiene miedo';
texto3= 'She say good mornig when is midnight';
 
var test = watsonservice.analyzeText(texto2).then(response => {
    console.log(JSON.stringify(response,null,2));
}).catch(err=>{console.log(err)});
