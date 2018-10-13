import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ListComponent } from './list/list.component';
import { ArticlesComponent } from './articles/articles.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ListComponent,
    ArticlesComponent,
    WorksComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
      LayoutModule, MatToolbarModule, MatButtonModule, FlexLayoutModule,
      MatSidenavModule, MatIconModule, MatListModule, AppRoutingModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
