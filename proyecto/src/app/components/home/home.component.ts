import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private titulo : String;
  public texto: String;

  constructor(private _router : Router, private _route:ActivatedRoute) { 
    this.titulo="Sherlock";
    this.texto="";
  }

  ngOnInit() {
  }

  getTitulo():String{
    return this.titulo;
  }

  onSubmit(form){
    this._router.navigate(['detail/:user',{user:this.texto}]);
  }

}
