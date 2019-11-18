import {Component, OnInit} from '@angular/core';
import {EvaluationResultModel} from '../../model/evaluation.result.model';
import {AppService} from '../../service/app.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private service: AppService, private router: Router) {
  }

  selectedEvaluation: EvaluationResultModel;
  data: EvaluationResultModel[] = [];

  static getTime(dateString: string) {
    return dateString != null ? new Date(dateString).getTime() : 0;
  }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.service.getAllHistory().subscribe(
      (response) => {
        this.data = response;
        this.sortByDate();
        this.filterDuplicate();
      }
    );
  }


  public sortByDate(): void {
    this.data = this.data.sort((a: EvaluationResultModel, b: EvaluationResultModel) => {
      return HistoryComponent.getTime(b.evaluationDate) - HistoryComponent.getTime(a.evaluationDate);
    });
    this.data.forEach(v => {
      console.log(v.score + ' ' + HistoryComponent.getTime(v.evaluationDate));
    });
  }

  select(result: EvaluationResultModel, $event: any) {
    $event.preventDefault();
    this.selectedEvaluation = result;
  }

  getClassByScore(score: number): string {
    if (score > 80) {
      return 'high';
    } else if (score >= 50 && score <= 79) {
      return 'medium';
    } else {
      return 'low';
    }
  }

  onNewAnalyze() {
    this.router.navigate(['/']);
  }

  refresh() {
    this.selectedEvaluation = null;
    this.init();
  }

  private filterDuplicate() {
    const apiNameList: string[] = [];
    this.data = this.data.filter(v => {
      if (apiNameList.find(a => a === v.apiName)) {
        return false;
      } else {
        apiNameList.push(v.apiName);
        return true;
      }
    });
  }
}
