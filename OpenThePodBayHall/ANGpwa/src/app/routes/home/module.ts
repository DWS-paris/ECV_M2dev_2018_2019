/*
Imports
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { ComponentRouter } from "./route";

    // Inner
    import { HomeComponent } from "./home.component";
    import { FormSigninModule } from "../../shared/form-signin/module";
    import { FormLoginModule } from "../../shared/form-login/module";
//

/*
Definition
*/
    @NgModule({
        declarations: [ HomeComponent ],
        imports: [ ComponentRouter, FormSigninModule, FormLoginModule ]
    })
//

/*
Export
*/
    export class HomePageModule {};
//