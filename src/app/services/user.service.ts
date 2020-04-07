import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class UserService {
    constructor(
        private _http: HttpClient
    ){

    }

    getUserInfo = function (userId: string) : Observable<any> {
        return this._http.get(userId);
    }
}