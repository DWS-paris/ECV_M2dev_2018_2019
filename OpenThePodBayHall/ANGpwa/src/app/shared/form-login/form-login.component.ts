/*
Imports & config
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";
  import { Router } from "@angular/router";

  // Inner
  import { AuthService } from "../../service/auth.service";

  // Configuration
  @Component({
    selector: 'app-form-login',
    templateUrl: './form-login.component.html',
    providers: [ AuthService ]
})
//



/*
Export
*/
  export class FormLoginComponent implements OnInit {

    form:FormGroup;

    messagePerErrorCode = {
        loginfailed: "Invalid credentials"
    };

    errors = [];

    constructor(private fb:FormBuilder, private AuthService: AuthService, private router: Router) {

        this.form = this.fb.group({
            email: ['j.noyer@digitalworkshop.fr',Validators.required],
            password: ['12345',Validators.required]
        });

    }

    ngOnInit() {

    }

    login() {

        const val = this.form.value;

        if (val.email && val.password) {

            this.AuthService.login(val.email, val.password)
            .then( apiResponse => {
                console.log("User is logged in");
            })
            .catch( apiResponse => {
                console.error(apiResponse)
            })


                // .subscribe(
                //     () => {
                //         console.log("User is logged in");
                //         this.router.navigateByUrl('/');
                //     }
                // );

        }


    }
  }
//