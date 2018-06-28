import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { CatogoryComponent } from './catogory/catogory.component';
import { NewsComponent } from './news/news.component';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [
    {
        path: 'newsFeed',
        component: CatogoryComponent,
    },
    {
        path: '',
        component: NewsComponent,
        pathMatch: 'full'
    },
    {
        path: 'allData',
        component: SampleComponent,
    },
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
