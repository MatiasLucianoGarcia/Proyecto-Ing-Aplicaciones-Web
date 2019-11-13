export class Analisis{
    constructor(
        private user,
        private img,
        private anger,
        private disgust,
        private fear,
        private joy,
        private sadness,
        private openness,
        private conscientiousness,
        private extraversion,
        private agreeableness,
        private emotionalRange){}

        getUserName(){return this.user;}
        getImg(){return this.img;}
        getAnger():number{return this.anger;}
        getDisgust():number{return this.disgust;}
        getFear():number{return this.fear;}
        getJoy():number{return this.joy;}
        getSadness():number{return this.sadness;}
        getOpenness():number{return this.openness;}
        getConscientiousness():number{return this.conscientiousness;}
        getExtraversion():number{return this.extraversion;}
        getAgreeableness():number{return this.agreeableness;}
        getEmotionalRange():number{return this.emotionalRange;}


}