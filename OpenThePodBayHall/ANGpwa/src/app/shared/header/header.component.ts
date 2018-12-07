/*
Import & configuration
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { Observable } from "rxjs";

  // Inner
  import { AuthService } from "../../service/auth.service";
  import { UserModel } from "../../models/user.model";

  // Config.
  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
  })
//

/*
Export
*/
  export class HeaderComponent implements OnInit {

    public isLoggedIn$: Observable<boolean>;
    public isLoggedOut$: Observable<boolean>;
    public connectedUser$: Observable<UserModel>;

    constructor(
      public Router: Router,
      private AuthService: AuthService
    ) { }

    ngOnInit() {
      this.isLoggedIn$ = this.AuthService.isLoggedIn$;
      this.isLoggedOut$ = this.AuthService.isLoggedOut$;
      this.connectedUser$ = this.AuthService.singleUser$;
    }

  }
// 