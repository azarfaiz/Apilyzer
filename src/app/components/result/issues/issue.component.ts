import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IssueModel} from '../../../model/issueModel';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {

  @Input() issue: IssueModel;
  @Output() fixed = new EventEmitter();

  fixForm: FormGroup;

  isCollapsed = true;
  disabled = false;

  constructor() {
  }

  ngOnInit() {
    this.initializeForm();
  }

  /*onFix() {
    this.fixed.emit(0);
    this.disabled = true;
  }
*/
  private initializeForm() {
    const ruleName = this.issue.name;
    this.fixForm = new FormGroup({});
    switch (ruleName) {
      case 'MISSING_INFO_DESC':
      case 'MISSING_SERVER_DESC':
        this.fixForm.addControl('description', new FormControl(null));
        break;
    }
  }

  private getControlCount() {
    return Object.keys(this.fixForm.controls).length;
  }

  private getControlKeys() {
    return Object.keys(this.fixForm.controls);
  }
}
