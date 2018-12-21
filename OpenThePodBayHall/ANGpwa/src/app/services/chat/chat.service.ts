/* 
Imports and config
*/
  // Use environement value
  import { environment } from "../../../environments/environment";

  // The "Injectable" interface is needed to define a service
  import { Injectable } from '@angular/core';

  // The "HttpClient" and "HttpHeaders" interface is needed to make HTTP request
  import { HttpClient, HttpHeaders } from "@angular/common/http";

  // Config
  @Injectable({
    providedIn: 'root'
  })
//


/* 
Export
*/
  export class ChatService {

    // Declare your api URL
    private apiUrl = `${environment.apiUrl}/chat`;

    constructor(
      // Inject "HttpClient" in the class to use it
      private HttpClient: HttpClient
    ) { }

    public createItem = ( content: String ): Promise<any> => {
      // Optional: set header request
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');
      
      return this.HttpClient.post( this.apiUrl, {content}, { headers: myHeader } )
      .toPromise() // Use Promise in an Angular Service
      .then( apiResponse => Promise.resolve(apiResponse) ) // Resolve Promise success
      .catch( apiResponse => Promise.reject(apiResponse) ) // Reject Promise error
    }

    public readAllItem = (): Promise<any> => {
      // Optional: set header request
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');
      
      return this.HttpClient.get( this.apiUrl, { headers: myHeader } )
      .toPromise() // Use Promise in an Angular Service
      .then( apiResponse => Promise.resolve(apiResponse) ) // Resolve Promise success
      .catch( apiResponse => Promise.reject(apiResponse) ) // Reject Promise error
    }
  }
//