import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _url = './assets/country.json';
  public _selectedCountry: any;

  constructor(private _http: HttpClient) { }

  getJsonUrl() {
    return this._http.get(this._url);
  }
 }