import { Component, OnInit, OnChanges } from '@angular/core';
import { CatogoryService } from './catogory.service';

import { ActivatedRoute } from "@angular/router";
import * as Configuration from './../../../config.js';

@Component({
  selector: 'app-catogory',
  templateUrl: './catogory.component.html',
  styleUrls: ['./catogory.component.css']
})
export class CatogoryComponent implements OnInit, OnChanges {
  
  public configApi = Configuration;
  totalCountResult: any;
  pagination: any;
  public articleList = [];
  public pagesize = 5;
  public selectedCountryCode = "";
  public selectedCategory = "";

  constructor(private _catogoryService: CatogoryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedCountryCode = params.code;
      this.selectedCategory = params.category;
      this.onApicall(1);
    });
  }

  ngOnChanges() {
  }

  onApicall(page) {
    var query = this.configApi.headlinesUrl + "country=" + this.selectedCountryCode + "&category=" + this.selectedCategory + "&page=" + page + "&pageSize=" + this.pagesize + "&apiKey=" + this.configApi.apikey;
    this._catogoryService.getCountryUrl(query)
      .subscribe((endpointData) => {
        this.totalCountResult = endpointData['totalResults'];
        this.pagination = page;
        this.articleList = endpointData['articles'];
      })
  }

}
