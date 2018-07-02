import { Component, OnInit } from '@angular/core';

import { SampleService } from './sample.service.js';
import * as Configuration from './../../../config.js';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  count : any;
  p:any;
  public articleList = [];
  public pagesize = 10;
  public configApi = Configuration;
  public range : any;

  constructor(private _sampleService: SampleService) {}

  ngOnInit() {
  }
  public timeout:any;
  public debounce(func, wait, immediate=null) {
    var that = this;
    return function() {
      var context = this, args = arguments;
      var later = function() {
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
    this.debounce(()=> {
      this.range = newValue;
      if (newValue.length > 3) {
        this.onApicall(1);
     }
    }, 2500)();
  } 
  
  onApicall(page) {
    var query = "&q=" + this.range + "&page=" + page + "&pageSize=" + this.pagesize + "&apiKey=" + this.configApi.apikey;
    console.log("++++++++++++++++++",query);
    this._sampleService.getCount(query)

      .subscribe((data1) => {
        this.count = data1['totalResults'];
        this.p = page; 
        this.articleList = data1['articles'];
        console.log("articles",data1['articles']);
      })
  }

}
