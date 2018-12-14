/* 
Imports
*/
    // Import the iterface to create a router
    import { Routes } from '@angular/router';

    // Import components used in the routes
    import { HomePageComponent } from "./routes/home-page/home-page.component";
    import { SigninPageComponent } from "./routes/signin-page/signin-page.component";
    import { MePageComponent } from "./routes/me-page/me-page.component";
    import { LoginPageComponent } from "./routes/login-page/login-page.component";
    import { ChatPageComponent } from "./routes/chat-page/chat-page.component";
//

/* 
Export a contant to define routes
- Create an array of type Routes
- Each route is an object:
    - "path" is the endpoint (slash isn't needed)
    - "component" is the component used in the route
    - Other options are avaible here https://angular.io/api/router/Routes
*/
    export const MainRouter: Routes = [
        {
            path: '',
            component: HomePageComponent,
        },
        {
            path: 'signin',
            component: SigninPageComponent
        },
        {
            path: 'me',
            component: MePageComponent
        },
        {
            path: 'login',
            component: LoginPageComponent
        },
        {
            path: 'chat',
            component: ChatPageComponent
        }
    ]
//