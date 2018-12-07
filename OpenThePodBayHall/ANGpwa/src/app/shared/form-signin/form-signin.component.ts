/*
Imports & config
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import {FormBuilder, FormGroup, Validators} from "@angular/forms";
  import {Router} from "@angular/router";

  // Inner
  import { AuthService } from "../../service/auth.service";

  // Configuration
  @Component({
    selector: 'app-form-signin',
    templateUrl: './form-signin.component.html',
    providers: [ AuthService ]
})
//



/*
Export
*/
  export class FormSigninComponent implements OnInit {

    /*
    Configuration
    */
      // Variables
      public form: FormGroup;
      public errors: Array<string>;
      public messagePerErrorCode: any;
    
      // Class injections
      constructor(
        private FormBuilder: FormBuilder, 
        private AuthService: AuthService,
        private Router: Router
      ) {
        // Set form builder
        this.form = this.FormBuilder.group({
          email: ['j.noyer@digitalworkshop.fr', Validators.required],
          first_name: ['Julien', Validators.required],
          last_name: ['Noyer', Validators.required],
          password: ['12345', Validators.required],
          confirm: ['12345', Validators.required]
        });

        // Set form error
        this.errors = [];

        // Set error messages
        this.messagePerErrorCode = {
          min: 'The minimum length is 10 characters',
          uppercase: 'At least one upper case character',
          digits: 'At least one numeric character',
          "err_user": 'Could not create user'
        };
      }
    //


    /*
    Methods
    */
      // User registration
      public signin = () => {
        const formValue = this.form.value;

        if (formValue.email && formValue.password && formValue.password === formValue.confirm) {
          delete formValue.confirm;
          
          this.AuthService.signUp(formValue)
          .then( apiResponse => {
            console.log(apiResponse)
          })
          .catch( apiResponse => {
            console.log(apiResponse)
          })
        }
    }
    //



    /*
    Hooks
    */
      ngOnInit() {
      }
    //

  }
//