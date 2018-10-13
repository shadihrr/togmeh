import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroComponent} from './intro/intro.component';
import {ArticlesComponent} from './articles/articles.component';
import {WorksComponent} from './works/works.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
    { path: '', redirectTo: '/intro', pathMatch: 'full' },
    { path: 'intro', component: IntroComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'works', component: WorksComponent },
    { path: 'contact', component: ContactComponent }

];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
