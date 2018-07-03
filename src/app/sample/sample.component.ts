import { Component, OnInit } from '@angular/core';

import { SampleService } from './sample.service.js';
import * as Configuration from './../../../config.js';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  totalCountResult: any;
  pagination: any;
  public articleList = [];
  public pagesize = 10;
  public configApi = Configuration;
  public searchQuery: any;

  constructor(private _sampleService: SampleService) { }

  ngOnInit() { }

  public timeout: any;
  public debounce(func, wait, immediate = null) {
    var that = this;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        that.timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !that.timeout;
      clearTimeout(that.timeout);
      that.timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  saverange(newValue) {
    this.debounce(() => {
      this.searchQuery = newValue;
      if (newValue.length > 3) {
        this.onApicall(1);
      }
    }, 2500)();
  }

  onApicall(page) {
    var query = this.configApi.everythingUrl + "&q=" + this.searchQuery + "&page=" + page + "&pageSize=" + this.pagesize + "&apiKey=" + this.configApi.apikey;
    this._sampleService.getCountryUrl(query)

      .subscribe((endpointData) => {
        this.totalCountResult = endpointData['totalResults'];
        this.pagination = page;
        this.articleList = endpointData['articles'];
      })
  }

}
