import { Component, OnInit, NgZone } from '@angular/core';
import { NewsService } from './news.service';
import { Country } from '../country';

import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news = 'NEWS SOURCES';

  name1: any;
  count: any;

  public selectedCountryCode = "";
  public selectedCategory = "";

  selectedCountry: Country;
  constructor(private _newsService: NewsService, private _router: Router) { }

  ngOnInit() {
    this._newsService.getName1()
      .subscribe((Data) => {
        this.name1 = Data;
      });
    this.onApicall();

  }
  onSelect(count: Country): void {
    this.selectedCountry = count;
    this.selectedCountryCode = this.selectedCountry.code;
  }
  onApicall() {
    var query = "country=" + this.selectedCountryCode + "&category=" + this.selectedCategory + "&apiKey=21dd3db9a5a04354915b8539d508bf2e";
    
    this._newsService.getCount(query)
      .subscribe((data1) => {
        this.count = data1['articles'];
        this._newsService.setSelectedCountry(data1['articles']);
      })
  }

  onCatogory(value) {

    this.selectedCategory = value;
    this.onApicall();
    this._router.navigate(['/newsFeed',{code:this.selectedCountryCode , category:this.selectedCategory }])
  }
  
}
