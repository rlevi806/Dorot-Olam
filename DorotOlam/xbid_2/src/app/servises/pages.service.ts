import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Http ,Headers} from '@angular/http';
import { root } from '../models/root.model';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class pageService {
    baseUrl = `${environment.baseUrl}/api/Detailes`;
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    //  ' Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'

  // headers.append('GET', 'POST', 'OPTIONS');

    }),/**TODO cahni check solution +  global 'Access-Control-Allow-Origin': 'http://localhost:5000/'*/
 
  } ; 
  deatails: string='http://localhost:55239/api/Details/SaveDetails';
  url: string='http://localhost:55239/api/Details/uiuu';
constructor(private http: Http,private _http:HttpClient) { }

save(deatails:root){
  return this._http.post(this.deatails,deatails,this.httpOptions);
}
GetYears(): Observable <string>{
  return this._http.get<string>(this.url);
  // return this._http.get<string>(this.url,this.httpOptions);
 
    }
    sendDetailes() {

        return this._http.post(`${this.baseUrl}/SendMessgeToCustomer`,"");
    }


}