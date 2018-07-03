import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatogoryService {
  public _selectedCountry: any;

  constructor(private _http: HttpClient) { }

  getCountryUrl(query) {
    return this._http.get(query);
  }
}
