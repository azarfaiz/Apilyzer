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
  @Output() newAnalyze = new EventEmitter();
  @Output() issueFix = new EventEmitter();

  constructor(private service: AppService) {
  }

  ngOnInit() {

  }

  download() {
    this.service.downloadReport(this.result.id);
  }

  downloadFile() {
    this.service.downloadFile(this.result.id);
  }

  analyzeAnotherAPI($event) {
    $event.preventDefault();
    this.newAnalyze.emit();
  }

  onFix() {
    this.issueFix.emit();
  }
}
