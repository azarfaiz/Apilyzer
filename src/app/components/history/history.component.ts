import {Component, OnInit} from '@angular/core';
import {EvaluationResultModel} from '../../model/evaluation.result.model';
import {AppService} from '../../service/app.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  selectedEvaluation: EvaluationResultModel;
  data: EvaluationResultModel[] = [];

  constructor(private service: AppService) {
  }

  ngOnInit() {
    this.service.getAllHistory().subscribe(
      (response) => this.data = response
    );
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
}
