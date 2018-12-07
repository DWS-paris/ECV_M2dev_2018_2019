/*
Import
*/
    // Angular
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from "@angular/router";

    // Inner
    import { HomeComponent } from "./home.component";
//

/*
Definition
*/
    const routes: Routes = [
        {
            path: '',
            component: HomeComponent
        }
    ]
//

/*
Export
*/
    export const ComponentRouter: ModuleWithProviders = RouterModule.forChild(routes)
//