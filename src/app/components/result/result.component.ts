import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EvaluationResultModel} from '../../model/evaluation.result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnChanges {

  hide = false;

  @Input() result: EvaluationResultModel;

  constructor() {
  }

  ngOnInit() {

  }



  ngOnChanges(changes: SimpleChanges): void {

  }


}
