import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  private currentUser: any;


  constructor() {

  }

  get currentUserGet(): any {
     return this.currentUser;
  }

  set currentUserSet(user: any) {
    this.currentUser = user;
  }

}
