import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIS } from '../common';
import { environment } from 'src/environments/environment';



@Injectable()
export class UserService {
    apiPre: string;
    constructor(
        private _http: HttpClient
    ){
    }

    regist = function (user: any) : Observable<any> {
        return this._http.post(environment.API_HOST + APIS.STOCK_SERVICE_AUTH + 'regist', JSON.stringify(user));
    }

    authToken = function (user: any) : Observable<any> {
        return this._http.post(environment.API_HOST + APIS.STOCK_SERVICE_AUTH + 'authenticate', JSON.stringify(user));
    }

    updateUser = function (user: any) : Observable<any> {
        return this._http.put(environment.API_HOST + APIS.STOCK_SERVICE_AUTH + 'update', JSON.stringify(user));
    }

    getCurrentUser = function () {
        return this._http.get(environment.API_HOST + APIS.STOCK_SERVICE_AUTH + 'currentuser');
    }
}