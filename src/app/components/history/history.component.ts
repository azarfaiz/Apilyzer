import {Component, OnInit} from '@angular/core';
import {EvaluationResultModel} from '../../model/evaluation.result.model';
import {AppService} from '../../service/app.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  data: EvaluationResultModel[] = [];

  constructor(private service: AppService) {
  }

  ngOnInit() {
    this.service.getAllHistory().subscribe(
      (response) => this.data = response
    );
  }
}
