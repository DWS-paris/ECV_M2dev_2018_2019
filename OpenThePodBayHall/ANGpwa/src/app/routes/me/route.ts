/*
Import
*/
    // Angular
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from "@angular/router";

    // Inner
    import { MeComponent } from "./me.component";
//

/*
Definition
*/
    const routes: Routes = [
        {
            path: '',
            component: MeComponent
        }
    ]
//

/*
Export
*/
    export const ComponentRouter: ModuleWithProviders = RouterModule.forChild(routes)
//