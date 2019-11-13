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
  private myAnalisis: Analisis=new Analisis('UsuarioPrueba',null,0.33,0.22,0.111,0.01,0.0124,0.212,0.4312,0.7832,0.0021,0.451);


  constructor(
    private _analisisService: AnalisisService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params =>{
      let user =params.user;
       
      //this.myAnalisis = new Analisis('UsuarioPrueba',null,0.33,0.22,0.111,0.01,0.0124,0.212,0.4312,0.7832,0.0021,0.451);
      //console.log(this.getAnalisis(user));
    });
  }

  getAnalisis(user){
    this._analisisService.getProject(user).subscribe(
    response=>{
        console.log(response);
        this.myAnalisis=response.analisis;
    },
    error=>{
      console.log(<any> error);
    });
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['Anger', 'Disgust', 'Fear', 'Joy', 'Sadness'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [this.myAnalisis.getAnger(), this.myAnalisis.getDisgust(), this.myAnalisis.getFear(),this.myAnalisis.getJoy(), this.myAnalisis.getSadness()],
     label: this.myAnalisis.getUserName(),
     backgroundColor:['rgba(255, 102, 102, 1)','rgba(0,204,0, 1)','rgba(153, 102, 255, 1)','rgba(255, 204, 0, 1)','rgba(102, 204, 255 , 1)'],
     hoverBackgroundColor:['rgba(255, 102, 102, 0.7)','rgba(0,204,0,0.7)','rgba(153, 102, 255, 0.7)','rgba(255, 204, 0, 0.7)','rgba(102, 204, 255 , 0.7)']
    }
  ];


}
