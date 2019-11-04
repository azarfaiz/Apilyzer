import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './base/header/header.component';
import {FooterComponent} from './base/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {ResultComponent} from './components/result/result.component';
import {GaugeModule, NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RuleSetComponent} from './components/result/rules-set/rule-set.component';
import {CollapseModule} from 'ngx-bootstrap';
import {SubCategoryComponent} from './components/result/sub-category/sub-category.component';
import {FormsModule} from '@angular/forms';
import {IssuesComponent} from './components/result/issues/issues.component';
import {PieGridComponent} from './components/pie-grid/pie-grid.component';
import { HistoryComponent } from './components/history/history.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResultComponent,
    RuleSetComponent,
    SubCategoryComponent,
    IssuesComponent,
    PieGridComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
