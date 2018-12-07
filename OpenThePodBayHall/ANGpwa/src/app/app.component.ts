/*
Import & configuration
*/
  // Angular
  import { Component } from '@angular/core';

  // Config.
  @Component({
    selector: 'app-root',
    template: `
      <app-header></app-header>
      <main class="maxWidth">
        <router-outlet></router-outlet>
      </main>
    `
  })
//

/*
Export
*/
  export class AppComponent {}
//