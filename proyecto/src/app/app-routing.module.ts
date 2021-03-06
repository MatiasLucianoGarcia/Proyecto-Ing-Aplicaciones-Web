import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DetailComponent} from './components/detail/detail.component';
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';




const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'detail/:user', component: DetailComponent},
  {path:'error',component:ErrorComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
