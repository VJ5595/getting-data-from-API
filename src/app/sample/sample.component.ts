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

  constructor(private _sampleService: SampleService) { }

  ngOnInit() {
    this.onApicall(1);
  }
  onApicall(page) {
    var query = "&page=" + page + "&pageSize=" + this.pagesize + "&apiKey=" + this.configApi.apikey;
    this._sampleService.getCount(query)
      .subscribe((data1) => {
        this.count = data1['totalResults'];
        this.p = page; 
        this.articleList = data1['articles'];
      })
  }

}
