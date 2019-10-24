import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './base/header/header.component';
import {FooterComponent} from './base/footer/footer.component';
import {HomeComponent} from './base/home/home.component';
import {ChartsComponent} from './charts/charts.component';
import {GaugeModule, NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RuleSetComponent} from './rules-set/rule-set.component';
import {CollapseModule} from 'ngx-bootstrap';
import {RuleComponent} from './rule/rule.component';
import {FormsModule} from '@angular/forms';
import { PieGridComponent } from './pie-grid/pie-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChartsComponent,
    RuleSetComponent,
    RuleComponent,
    PieGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
