import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {EvaluationResultModel} from '../../model/evaluation.result.model';
import {CategoryModel} from '../../model/category.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnChanges {

  hide = false;

  @Input() result: EvaluationResultModel;
  @Output() onNewAnalyze = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }



  ngOnChanges(changes: SimpleChanges): void {

  }


  analyzeAnotherAPI() {
    this.onNewAnalyze.emit();
  }

  onFix($event: any) {

  }
}
