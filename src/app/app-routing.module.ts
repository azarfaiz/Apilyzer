import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ResultComponent} from './components/result/result.component';
import {HistoryComponent} from './components/history/history.component';
import {RulesConfigureComponent} from './components/rules-configure/rules-configure.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'configure',
    component: RulesConfigureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
