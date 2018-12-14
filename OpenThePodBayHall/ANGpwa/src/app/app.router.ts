/* 
Importer l'interface pour définir les routes
*/
    // Angular
    import { Routes } from '@angular/router';

    // Inner
    import { HomePageComponent } from "./routes/home-page/home-page.component";
    import { SigninPageComponent } from "./routes/signin-page/signin-page.component";
    import { MePageComponent } from "./routes/me-page/me-page.component";
//

/* 
Exporter une contante pour définir le comportement de la routex 
*/
    export const MainRouter: Routes = [
        {
            path: '',
            component: HomePageComponent
        },
        {
            path: 'signin',
            component: SigninPageComponent
        },
        {
            path: 'me',
            component: MePageComponent
        }
    ]
//