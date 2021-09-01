import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routes} from './routes';
//added manually
import { RouterModule,Routes } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //added maunally
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ],
  
})
export class AppRoutingModule { }
