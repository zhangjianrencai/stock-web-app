import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  private _currentUser: any;

  private _companyList: any;

  private _sectorList: any;

  private _exchangeList: any;


  constructor() {

  }

  get currentUser(): any {
     return this._currentUser;
  }

  set currentUser(user: any) {
    this._currentUser = user;
  }


    get companyList(): any {
      return this._companyList;
  }

  set companyList(list: any) {
    this._companyList = list;
  }


  get sectorList(): any {
    return this._sectorList;
  }

  set sectorList(list: any) {
  this._sectorList = list;
  }

  get exchangeList(): any {
    return this._exchangeList;
  }

  set exchangeList(list: any) {
  this._exchangeList = list;
  }

}
