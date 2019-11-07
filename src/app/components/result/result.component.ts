import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EvaluationResultModel} from '../../model/evaluation.result.model';
import {AppService} from '../../service/app.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  hide = false;

  @Input() result: EvaluationResultModel;
  @Output() onNewAnalyze = new EventEmitter();

  constructor(private service: AppService) {
  }

  ngOnInit() {

  }

  download() {
    this.service.download(this.result.id);
  }

  analyzeAnotherAPI($event) {
    $event.preventDefault();
    this.onNewAnalyze.emit();
  }

  onFix($event: any) {

  }
}
