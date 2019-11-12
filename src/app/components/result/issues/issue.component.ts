import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IssueModel} from '../../../model/issueModel';
import {FormControl, FormGroup} from '@angular/forms';
import {AppService} from '../../../service/app.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {

  @Input() issue: IssueModel;
  @Input() evalId: string;
  @Output() fixed = new EventEmitter();

  fixForm: FormGroup;

  isCollapsed = true;
  issueFixed = false;

  constructor(private service: AppService) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  onFix() {

    this.service.fixIssue(this.evalId, this.issue.id, this.fixForm.value).subscribe(
      (response) => {
        this.issueFixed = true;
        this.fixed.emit(response);
      }
    );
  }

  private initializeForm() {
    const ruleName = this.issue.name;
    this.fixForm = new FormGroup({});
    switch (ruleName) {
      case 'MISSING_INFO_DESC':
      case 'MISSING_SERVER_DESC':
        this.fixForm.addControl('description', new FormControl(null));
        break;
      case 'MISSING_SERVER_INFORMATION':
        this.fixForm.addControl('url', new FormControl(null));
        this.fixForm.addControl('description', new FormControl(null));
        break;
      case 'OPERATION_2XX_RESPONSE':
        this.fixForm.addControl('responseStatusCode', new FormControl(null));
        this.fixForm.addControl('description', new FormControl(null));
    }
  }

  private getControlCount() {
    return Object.keys(this.fixForm.controls).length;
  }

  private getControlKeys() {
    return Object.keys(this.fixForm.controls);
  }

  getPlaceHolderText(input: string) {
    switch (input) {
      case 'url':
        return 'URL';
      case 'responseStatusCode':
        return 'Status Code';
      default:
        return input;
    }
  }
}
