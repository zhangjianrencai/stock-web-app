import { Injectable } from "@angular/core";


@Injectable()
export class UtilsService {
    constructor(){}

    deepClone = function (obj:any) {
        var newObj = obj instanceof Array ? [] : {}
        for (var key in obj) {
            newObj[key] = typeof obj[key] == 'object' ? this.deepClone(obj[key]) : obj[key];
        }
        return newObj;
    }

}
