/* 
Imports and config
*/

  // Import the "OnInit" interface to enable Angular "ngOnInit" hook (cf. code below)
  import { Component, OnInit } from '@angular/core';

  // Import interface to use Angular form technic
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";

  // Import the service you need to use
  import { AuthService } from "../../services/auth/auth.service";

  // Config
  @Component({
    selector: 'app-signin-page',
    templateUrl: './signin-page.component.html',
    providers: [ AuthService ] // All used service must be declared in the "providers" array
  })
//


/* 
Export
*/
  // To use "ngOnInit" hook you need to implelment it in the class
  export class SigninPageComponent implements OnInit {

    // Declare a variable form 
    public form: FormGroup;

    constructor(
      private FormBuilder: FormBuilder, 
      private AuthService: AuthService
    ) { }

    private initForm = () => {
      this.form = this.FormBuilder.group({
        first_name: [ undefined, Validators.required ],
        last_name: [ undefined, Validators.required ],
        email: [ undefined, Validators.required ],
        password: [ undefined, Validators.required ]
      })
    }

    public signin = () => {
      // Vérifier les champs
      this.AuthService.signin( this.form.value )
      .then( apiResponse => console.log(apiResponse) )
      .catch( apiResponse => console.error(apiResponse) )
    }

    ngOnInit() {
      this.initForm()
    }

  }
//