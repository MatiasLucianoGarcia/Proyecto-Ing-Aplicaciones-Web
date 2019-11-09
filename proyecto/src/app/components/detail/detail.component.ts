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
  private myANalisis: Analisis;


  constructor(
    private _analisisService: AnalisisService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params =>{
      let user =params.user;

      //console.log(this.getAnalisis(user));
    });
  }

  getAnalisis(user){
    this._analisisService.getProject(user).subscribe(
    response=>{
        console.log(response);
        this.myANalisis=response.analisis;
    },
    error=>{
      console.log(<any> error);
    });
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];


}
