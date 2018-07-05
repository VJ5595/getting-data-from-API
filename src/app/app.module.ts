import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule  } from './app.routes';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { AlertsModule } from 'angular-alert-module';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { CatogoryComponent } from './catogory/catogory.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { SampleComponent } from './sample/sample.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    CatogoryComponent,
    TimeAgoPipe,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    AlertsModule.forRoot(),
    AppRoutingModule,
    NgHttpLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
