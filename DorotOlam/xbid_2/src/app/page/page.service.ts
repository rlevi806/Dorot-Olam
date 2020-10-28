import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageService {
    baseUrl = `${environment.baseUrl}/api/page`;
    constructor(private http: Http, private _http: HttpClient) {

    }

    getDetailesFromDB(numId: string) {
       // return this._http.get(`${this.baseUrl}/GetRootDetailes?id=` + numId);
        return this._http.get(`https://localhost:44399/api/record/GetRecordById?id=1111` + numId);
    }

    getIndexFromDB(numId: string) {
       // return this._http.get(`${this.baseUrl}/GetIndexDetailes?id=` + numId);
       return this._http.get(`https://localhost:44399/api/record/GetRecordById?id=1111` + numId);

    }
}
