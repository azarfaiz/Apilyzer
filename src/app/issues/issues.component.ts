import {Component, Input, OnInit} from '@angular/core';
import {IssuesModel} from "../model/issues.model";

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  @Input() issues: IssuesModel;

  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
