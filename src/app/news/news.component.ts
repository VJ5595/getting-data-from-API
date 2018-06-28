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

  }
  onSelect(count: Country): void {
    this.selectedCountry = count;
    this.selectedCountryCode = this.selectedCountry.code;
  }

  onCatogory(value) {
    this.selectedCategory = value;
    this._router.navigate(['/newsFeed',{code:this.selectedCountryCode , category:this.selectedCategory }])
  }
  
}
