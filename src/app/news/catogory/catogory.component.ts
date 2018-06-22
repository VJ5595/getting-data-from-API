import { Component, OnInit, OnChanges } from '@angular/core';
import { NewsService } from '../news.service';

import {ActivatedRoute } from "@angular/router";
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-catogory',
  templateUrl: './catogory.component.html',
  styleUrls: ['./catogory.component.css']
})
export class CatogoryComponent implements OnInit, OnChanges {
  public selectedCountry;

  constructor(private _newsService: NewsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(dayjs().format());
  }

  ngOnChanges() {
  }

}
