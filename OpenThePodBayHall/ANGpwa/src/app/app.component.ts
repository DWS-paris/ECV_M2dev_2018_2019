/* 
Import & definition
*/
  // Angular
  import { Component, OnInit } from '@angular/core';

  // Definition
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
//

/* 
Export
*/
  export class AppComponent implements OnInit {

    /* 
    Variables
    */
      public mainTitle: String;
      public formObject: any;
      public formErrorMsg: any;

      constructor(){
        this.mainTitle = `Hello <em>Angular</em>`;

        this.formObject = {
          email: undefined,
          password: undefined
        }

        this.formErrorMsg = {
          isActive: false,
          message: ``
        };
      }
    //

    /* 
    Methods
    */
      public login = () => {
        if( 
          this.formObject.email.length < 4 && 
          this.formObject.password.length < 4 ){
          this.formErrorMsg = {
            isActive: true,
            message: `Email et mot de passe requis`
          };
        }
      }
    //
    
    /* 
    Hooks
    */
      ngOnInit(){

      }
    //
  }
//