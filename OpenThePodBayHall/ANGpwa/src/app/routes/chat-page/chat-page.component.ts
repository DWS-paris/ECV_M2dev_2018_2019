/* 
Imports and config
*/

  // Import the "OnInit" interface to enable Angular "ngOnInit" hook (cf. code below)
  import { Component, OnInit } from '@angular/core';

  // Import interface to use Angular form technic
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";

  // Import the service you need to use
  import { ChatService } from "../../services/chat/chat.service";

  // Config
  @Component({
    selector: 'app-chat-page', 
    templateUrl: './chat-page.component.html',
    providers: [ ChatService ]
  })
//
export class ChatPageComponent implements OnInit {
  
  public form: FormGroup;

  constructor(
    private ChatService: ChatService,
    private FormBuilder: FormBuilder
  ) { }

  private initForm = () => {
    this.form = this.FormBuilder.group({
      content: [ undefined, Validators.required ],
    })
  }

  public createMessage = () => {
    this.ChatService.createItem(this.form.value.content)
    .then( apiResponse => console.log(apiResponse) )
    .catch( apiResponse => console.error(apiResponse) )
  }

  ngOnInit() {
    this.initForm();
  }

}
