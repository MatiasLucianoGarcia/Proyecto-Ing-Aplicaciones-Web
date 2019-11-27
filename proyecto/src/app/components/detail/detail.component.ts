import { Component, OnInit } from '@angular/core';
import {AnalisisService} from '../../services/analisis.service';
import {global} from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Analisis } from 'src/app/models/analisis';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [AnalisisService]
})
export class DetailComponent implements OnInit {

  private url: String;
  private myAnalisis: Analisis;
  private analisisJson;

  //Atributos de BarChart
  public barChartOptions;
  public barChartLabels;
  public barChartType;
  public barChartLegend; 
  public barChartData;

  //Atributos de RadarChart
  public radarChartLabels;
  public radarChartType;
  public radarChartData;

  constructor(
    private _analisisService: AnalisisService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(async params =>{
      let user =params.user;
      //this.setConfiguration(user);
      
      //Codigo de Test 
      this.myAnalisis = new Analisis('UsuarioPrueba',"http://pbs.twimg.com/profile_images/668940727800471552/n5j2l2Dm_normal.jpg",0.33,0.22,0.111,0.01,0.0124,0.212,0.4312,0.7832,0.0021,0.451);
      this.setBarChart();
      this.setRadarChart();
      
    });
  }

  setConfiguration(user){
    this._analisisService.getProject(user).subscribe(
    response=>{
        this.analisisJson = response.myAnalisis;
        this.myAnalisis = new Analisis(this.analisisJson.user,
          this.analisisJson.img,
          this.analisisJson.anger,
          this.analisisJson.disgust,
          this.analisisJson.fear,
          this.analisisJson.joy,
          this.analisisJson.sadness,
          this.analisisJson.openness,
          this.analisisJson.conscientiousness,
          this.analisisJson.extraversion,
          this.analisisJson.agreeableness,
          this.analisisJson.emotionalRange);
          this.setBarChart();
          this.setRadarChart();
    },
    error=>{
      //console.log(<any> error);
      this._router.navigate(['error']);
    });
  }

  setBarChart(){
    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    this.barChartLabels = ['Anger', 'Disgust', 'Fear', 'Joy', 'Sadness'];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartData = [
      {data: [this.myAnalisis.getAnger(), this.myAnalisis.getDisgust(), this.myAnalisis.getFear(),this.myAnalisis.getJoy(),this.myAnalisis.getSadness()],
       label: this.myAnalisis.getUserName(),
       backgroundColor:['rgba(255, 102, 102, 1)','rgba(0,204,0, 1)','rgba(153, 102, 255, 1)','rgba(255, 204, 0, 1)','rgba(102, 204, 255 , 1)'],
       hoverBackgroundColor:['rgba(255, 102, 102, 0.7)','rgba(0,204,0,0.7)','rgba(153, 102, 255, 0.7)','rgba(255, 204, 0, 0.7)','rgba(102, 204, 255 , 0.7)']
      }
    ];
  }

  setRadarChart(){
    this.radarChartLabels = ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'EmotionalRange'];
    this.radarChartType = 'radar';
    this.radarChartData = [
      {
        data: [this.myAnalisis.getOpenness(), this.myAnalisis.getConscientiousness(), this.myAnalisis.getExtraversion(),this.myAnalisis.getAgreeableness(),this.myAnalisis.getEmotionalRange()],
        label: this.myAnalisis.getUserName(),
        backgroundColor: 'rgba(64, 64, 64,0.8)',
        borderColor:'rgba(64, 64, 64,1)',
        pointBackgroundColor:'rgba(64, 64, 64,1)',
        pointBorderColor:'rgba(64, 64, 64,1)'

      }
    ];
  }

}
