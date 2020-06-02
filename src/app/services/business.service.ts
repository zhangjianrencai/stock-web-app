import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIS } from '../common';
import { environment } from 'src/environments/environment';



@Injectable()
export class BusinessService {
    apiPre: string;
    constructor(
        private _http: HttpClient
    ){
    }

    getIPO = function (id: string) : Observable<any> {
        return this._http.get(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.IPO + '?id=' + id);
    }

    fetchIPOList = function () : Observable<any> {
        return this._http.get(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.IPO);
    }

    updateIPO = function (id: string, ipo: any) : Observable<any> {
        return this._http.put(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.IPO + '/' + id, ipo);
    }

    addIPO = function (ipo: any) : Observable<any> {
        return this._http.post(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.IPO, ipo);
    }

    deleteIPO = function (id: any) : Observable<any> {
        return this._http.delete(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.IPO + '/' +id);
    }

    /** 
     * Company CURD 
     */
    getCompany = function (id: string) : Observable<any> {
        return this._http.get(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.COMPANY + '?id=' + id);
    }

    fetchCompanyList = function () : Observable<any> {
        return this._http.get(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.COMPANY);
    }

    updateCompany = function (id:string, company: any) : Observable<any> {
        return this._http.put(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.COMPANY + '/' + id, company);
    }

    addCompany = function (company: any) : Observable<any> {
        return this._http.post(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.COMPANY, company);
    }

    deleteCompany = function (id: any) : Observable<any> {
        return this._http.delete(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.COMPANY + '/' + id);
    }

    /** 
     * Exchange CURD 
     */
    getExchange = function (id: string) : Observable<any> {
        return this._http.get(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.EXCHANGE + '?id=' + id);
    }

    fetchExchangeList = function () : Observable<any> {
        return this._http.get(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.EXCHANGE);
    }

    updateExchange = function (id: string, exchange: any) : Observable<any> {
        return this._http.put(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.EXCHANGE + '/' + id, exchange);
    }

    addExchange = function (exchange: any) : Observable<any> {
        return this._http.post(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.EXCHANGE, exchange);
    }

    deleteExchange = function (id: any) : Observable<any> {
        return this._http.delete(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.EXCHANGE, id);
    }

    /**
     * IPO item
     */
    fetchUserIPOItemList = function () : Observable<any> {
        return this._http.get(environment.API_HOST + APIS.STOCK_SERVICE_BUSINESS.IPO + '/byUser');
    }

    /**
     * fetch company data to compare
     */
    companyStockPrice = function (companyName: string, startDate: string, endDate: string) : Observable<any> {
        return this._http.get(environment.API_HOST + APIS.STOCK_SERVICE_UPLOAD + 'compareData?companyName=' + companyName + '&startDate=' + startDate + '&endDate=' + endDate);
    }

}