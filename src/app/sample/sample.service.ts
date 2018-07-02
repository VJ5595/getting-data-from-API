import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private _http: HttpClient) { }

  getCount(query) {
    return this._http.get("https://newsapi.org/v2/everything?sortBy=relevancy"+ query);
  }
}
