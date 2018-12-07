/*
Import
*/
  // Angular
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { HttpClientModule } from '@angular/common/http';

  // Inner
  import { MainRouterModule } from "./main.router";
  import { AppComponent } from './app.component';
  import { HeaderComponent } from './shared/header/header.component';
//

/*
Define & export
*/
  @NgModule({
    declarations: [ AppComponent, HeaderComponent, ],
    imports: [
      BrowserModule,
      HttpClientModule,
      MainRouterModule,
    ],
    bootstrap: [ AppComponent ]
  })

  // Export
  export class AppModule { }
//