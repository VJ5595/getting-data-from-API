import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _url = './assets/country.json';
  public _selectedCountry: any;

  constructor(private _http: HttpClient) { }

  getName1() {
    return this._http.get(this._url);
  }
 }