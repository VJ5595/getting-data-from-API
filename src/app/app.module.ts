import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule  } from './app.routes';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { CatogoryComponent } from './news/catogory/catogory.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    CatogoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
