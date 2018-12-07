/*
Imports
*/
    // Angular
    import { NgModule } from "@angular/core";
    import { ComponentRouter } from "./route";

    // Inner
    import { MeComponent } from "./me.component";
//

/*
Definition
*/
    @NgModule({
        declarations: [ MeComponent ],
        imports: [ ComponentRouter ]
    })
//

/*
Export
*/
    export class MePageModule {};
//