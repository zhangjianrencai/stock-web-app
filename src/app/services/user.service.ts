import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIS } from '../common';



@Injectable()
export class UserService {
    apiPre: string;
    constructor(
        private _http: HttpClient
    ){
        this.apiPre = "http://localhost:8762";
    }

    regist = function (user: any) : Observable<any> {
        return this._http.post(APIS.STOCK_SERVICE_AUTH + 'regist', JSON.stringify(user));
    }

    authToken = function (user: any) : Observable<any> {
        return this._http.post(APIS.STOCK_SERVICE_AUTH + 'authenticate', JSON.stringify(user));
    }

    updateUser = function (user: any) : Observable<any> {
        return this._http.post(APIS.STOCK_SERVICE_AUTH + 'update', JSON.stringify(user));
    }

    getCurrentUser = function () {
        return this._http.get(APIS.STOCK_SERVICE_AUTH + 'currentuser');
    }
}