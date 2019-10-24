import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IssuesModel} from '../model/issues.model';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  @Input() issues: IssuesModel;
  @Output() fixed = new EventEmitter();

  isCollapsed = true;
  disabled = false;

  constructor() {
  }

  ngOnInit() {
  }

  onFix() {
    this.fixed.emit(this.issues.impact);
    this.disabled = true;
  }
}
