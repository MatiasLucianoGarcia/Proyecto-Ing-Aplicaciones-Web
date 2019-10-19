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

      console.log(this.getAnalisis(user));
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

}
