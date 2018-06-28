import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatogoryService {
  public _selectedCountry: any;

  constructor(private _http: HttpClient) { }

  getCount(query) {
    return this._http.get("https://newsapi.org/v2/top-headlines?" + query);
  }
  setSelectedCountry(value: any) {
    this._selectedCountry = value
  }
  getSelectedCountry(): any {
    return this._selectedCountry;
  }

}
