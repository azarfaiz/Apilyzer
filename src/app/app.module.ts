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
import {PieGridComponent} from './pie-grid/pie-grid.component';

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
    PieGridComponent
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
export class AppModule {
}
