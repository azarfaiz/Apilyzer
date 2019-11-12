import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './base/header/header.component';
import {FooterComponent} from './base/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {ResultComponent} from './components/result/result.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RuleSetComponent} from './components/result/rules-set/rule-set.component';
import {CollapseModule} from 'ngx-bootstrap';
import {SubCategoryComponent} from './components/result/sub-category/sub-category.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IssueComponent} from './components/result/issues/issue.component';
import {PieGridComponent} from './components/pie-grid/pie-grid.component';
import {HistoryComponent} from './components/history/history.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppService} from './service/app.service';
import {RequestInterceptor} from './interceptors/request-interceptor.service';
import {NamePipe} from './name.pipe';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { RulesConfigureComponent } from './components/rules-configure/rules-configure.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResultComponent,
    RuleSetComponent,
    SubCategoryComponent,
    IssueComponent,
    PieGridComponent,
    HistoryComponent,
    NamePipe,
    RulesConfigureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  providers: [AppService, {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
