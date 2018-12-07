/*
Import
*/
    // Angular
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from "@angular/router";
//

/*
Define & export
*/
    // Define
    const mainRoutes: Routes = [
        {
            path: '',
            loadChildren: './routes/home/module#HomePageModule'
        },
        {
            path: 'me',
            loadChildren: './routes/me/module#MePageModule'
        }
    ];

    // Export
    export const MainRouterModule: ModuleWithProviders = RouterModule.forRoot(mainRoutes);
//