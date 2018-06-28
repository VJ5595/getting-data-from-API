import { Component, OnInit, OnChanges } from '@angular/core';
import { CatogoryService } from './catogory.service';

import {ActivatedRoute } from "@angular/router";
import * as Configuration from './../../../config.js';

@Component({
  selector: 'app-catogory',
  templateUrl: './catogory.component.html',
  styleUrls: ['./catogory.component.css']
})
export class CatogoryComponent implements OnInit, OnChanges {
  public selectedCountry;
  public configApi = Configuration;
  name1 : any;
  count : any;
  p:any;
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
    var query = "country=" + this.selectedCountryCode + "&category=" + this.selectedCategory + "&page=" + page + "&pageSize=" + this.pagesize + "&apiKey=" + this.configApi.apikey;
    this._catogoryService.getCount(query)
      .subscribe((data1) => {
        this.count = data1['totalResults'];
        console.log("totalResults",data1['totalResults']);
        this.p = page; 
        console.log("page",page);
        this.articleList = data1['articles'];
      })
  }

}
