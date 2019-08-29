const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const auth = require('../auth');

let toneAnalyzer = new ToneAnalyzerV3({
    iam_apikey: auth.watson.iam_apikey,
    version: auth.watson.version,
    url: auth.watson.url
});

async function analyzeText(myText){
    return new Promise((resolve,reject)=>{
        let params= {
            tone_input: myText,
            content_type: 'text/plain'
        }
        toneAnalyzer.tone(params,function(err,tone){
            if(err){
                reject(err);
            }else{
                resolve(tone);
            }
        });
    });
}

module.exports={analyzeText};