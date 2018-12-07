/*
Import & configuration
*/
  // Angular
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from "@angular/common/http";
  import { Observable, BehaviorSubject } from "rxjs";
  import { shareReplay, filter, tap, map } from 'rxjs/operators';

  // Inner
  import { UserModel } from "../models/user.model";

  // Set & export anonymous user data
  export const ANONYMOUS_USER: UserModel = {
    id: undefined,
    email: undefined,
    first_name: undefined,
    last_name: undefined
  };

  // Config.
  @Injectable({
    providedIn: 'root'
  })
//


/*
Export
*/
  export class AuthService {

    /*
    Configuration
    */
      // Variables
      private apiUrl = '/api/auth'
      private subject = new BehaviorSubject<UserModel>(undefined);

      // Observable
      singleUser$: Observable<UserModel> = this.subject.asObservable().pipe(filter(singleUser => !!singleUser));
      isLoggedIn$: Observable<boolean> = this.singleUser$.pipe(map (singleUser => {
        // console.log(singleUser)
        return !!singleUser.id
      }));
      isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

      // Class injection
      constructor(private HttpClient: HttpClient) {
        // HttpClient.get('/api/auth/me').pipe(
        //   tap(console.log))
        //   .subscribe(user => this.subject.next(user ? user : ANONYMOUS_USER));
      }
    //

    /*
    Methods
    */
      // Créer une fonction pour enregistrer un utilisateur
      public signUp( user: UserModel ): Promise<any> {

        // Configurer la requête
        let myHeader = new HttpHeaders().set( 'Content-Type', 'application/json')

        // 3 paramêtre : url, data, header + clallback
        return this.HttpClient.post(`${this.apiUrl}/register`, user, { headers: myHeader }).toPromise()
        .then( (apiResponse: any) => {
          this.subject.next(apiResponse.data.user);
          return Promise.resolve(apiResponse);
        })
        .catch( apiResponse => Promise.reject(apiResponse) );
      };

      // Créer une fonction pour connecter un utilisateur
      public login( email: String,  password: String ): Promise<any> {

        // Configurer la requête
        let myHeader = new HttpHeaders().set( 'Content-Type', 'application/json')

        // 3 paramêtre : url, data, header + clallback
        return this.HttpClient.post(`${this.apiUrl}/login`, {email, password}, { headers: myHeader }).toPromise()
        .then( (apiResponse: any) => {
          console.log(apiResponse)
          this.subject.next(apiResponse.data.user);
          console.log(this.subject)
          return Promise.resolve(apiResponse);
        })
        .catch( apiResponse => Promise.reject(apiResponse) );
      };

      // Créer une fonction pour enregistrer un utilisateur
      public userInfo(): Promise<any> {

        // Configurer la requête
        let myHeader = new HttpHeaders().set( 'Content-Type', 'application/json')

        // 3 paramêtre : url, data, header + clallback
        return this.HttpClient.get(`${this.apiUrl}/me`, { headers: myHeader }).toPromise()
        .then( (apiResponse: any) => {
          this.subject.next(apiResponse.data);
          return Promise.resolve(apiResponse);
        })
        .catch( apiResponse => Promise.reject(apiResponse) );
      };
    //
  }
//