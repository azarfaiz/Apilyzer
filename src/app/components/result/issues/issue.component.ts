import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IssueModel} from '../../../model/issueModel';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {

  @Input() issue: IssueModel;
  @Output() fixed = new EventEmitter();

  isCollapsed = true;
  disabled = false;

  constructor() {
  }

  ngOnInit() {
  }

  onFix() {
    this.fixed.emit(0);
    this.disabled = true;
  }
}
