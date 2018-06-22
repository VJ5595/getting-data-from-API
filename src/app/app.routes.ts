import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { CatogoryComponent } from './news/catogory/catogory.component';
import { NewsComponent } from './news/news.component';
 

const routes: Routes = [
        // {
        //     path: 'vijay',
        //     component: CatogoryComponent,
        //     pathMatch: 'full'
        // },
        {
            path: 'newsFeed',
            component: CatogoryComponent,
          },
          { path: '',
          component: NewsComponent,
          pathMatch: 'full'
          },
        //   { path: '**', component: NewsComponent }

    ]; 


    @NgModule({
        imports: [
            RouterModule.forRoot(routes, {
                useHash: true,
                preloadingStrategy: PreloadAllModules
              })
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
    