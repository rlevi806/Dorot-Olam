import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoToServerService {
  //baseUrl = `${environment.baseUrl}/api/record`;
  baseUrl = `https://localhost:44399/api/record`;
  httpOptions={
    headers:new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

  constructor(private _http: HttpClient) {
  }

  getRecordById(numId: string) {
      return this._http.get(`${this.baseUrl}/GetRecordById?id=` + numId,this.httpOptions);
  }
}
