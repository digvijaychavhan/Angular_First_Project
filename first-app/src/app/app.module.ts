import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//added manually
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { MatListModule } from '@angular/material/list';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
//upto this

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //added manually
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
    //upto this

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
