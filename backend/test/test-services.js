const watsonservice = require('../services/watson-service');

/* texto= 'Los mas sabios y los mas tontos son los unicos que no se alteran';
texto2= 'Solo se puede ser valiente cuando en verdad se tiene miedo';
texto3= 'She say good mornig when is midnight'; */
var toneChatParams = {
  utterances: [
    {
      text: "Hello, I'm having a problem with your product.",
      user: "customer",
    },
    {
      text: "OK, let me know what's going on, please.",
      user: "agent",
    },
    {
      text: "Well, nothing is working :(",
      user: "customer",
    },
    {
      text: "Sorry to hear that.",
      user: "agent",
    },
  ],
};
var test = watsonservice.analyzeText(toneChatParams).then(response => {
    console.log(JSON.stringify(response,null,2));
}).catch(err=>{console.log(err)});
