/*
Imports
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from "@angular/common";
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    // Inner
    import { FormSigninComponent } from "./form-signin.component";
//

/*
Config.
*/
    @NgModule({
        declarations: [ FormSigninComponent ],
        exports: [ FormSigninComponent ],
        imports: [ CommonModule, FormsModule, ReactiveFormsModule ]
    })
//

/*
Export
*/
    export class FormSigninModule { }
//