/*
Imports
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from "@angular/common";
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    // Inner
    import { FormLoginComponent } from "./form-login.component";
//

/*
Config.
*/
    @NgModule({
        declarations: [ FormLoginComponent ],
        exports: [ FormLoginComponent ],
        imports: [ FormsModule, ReactiveFormsModule, CommonModule ]
    })
//

/*
Export
*/
    export class FormLoginModule { }
//