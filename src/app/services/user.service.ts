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

    getUserInfo = function (userId: string) : Observable<any> {
        return this._http.get(this.apiPre + APIS.GET_USER + '?userId='+userId + '&password=123');
    }

    saveUserInfo = function (user: any) : Observable<any> {
        return this._http.post(this.apiPre + APIS.SAVE_USER, JSON.stringify(user));
    }
}