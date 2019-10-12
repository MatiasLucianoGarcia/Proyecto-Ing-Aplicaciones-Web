import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private titulo : String;


  constructor() { 
    this.titulo="Sherlock"
  }

  ngOnInit() {
  }

  getTitulo():String{
    return this.titulo;
  }
}
