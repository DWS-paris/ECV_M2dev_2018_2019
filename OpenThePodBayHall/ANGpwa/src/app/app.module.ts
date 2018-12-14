import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importer le module pour la gestion des routes
import { RouterModule } from '@angular/router';

// Imprter le router
import { MainRouter } from "./app.router";

// Importer les modules pour la gestion des formulaire
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { SigninPageComponent } from './routes/signin-page/signin-page.component';
import { MePageComponent } from './routes/me-page/me-page.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SigninPageComponent,
    MePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MainRouter),
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
