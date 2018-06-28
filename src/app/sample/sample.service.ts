import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private _http: HttpClient) { }

  getCount(query) {
    return this._http.get("https://newsapi.org/v2/everything?q=apple&from=2018-06-27&to=2018-06-27&sortBy=popularity"+ query);
  }
}
