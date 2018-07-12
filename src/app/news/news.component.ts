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

  getCountryName: any;
  countries: any;

  public selectedCountryCode = "";
  public selectedCategory = "";

  selectedCountry: Country;
  constructor(private _newsService: NewsService, private _router: Router) { }

  ngOnInit() {
    this._newsService.getJsonUrl()
    .subscribe((Data) => {
      this.getCountryName = Data;
    });

  }
  onSelect(countries) {
    this.selectedCountry = countries.selectedValue;
    this.selectedCountryCode = this.selectedCountry.code;
  }

  onCatogory(value) {
    this.selectedCategory = value;
    this._router.navigate(['/newsFeed',{code:this.selectedCountryCode , category:this.selectedCategory }])
  }
  
}
