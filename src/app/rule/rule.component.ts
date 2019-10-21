import {Component, Input, OnInit} from '@angular/core';
import {IssuesModel} from "../model/issues.model";

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {

  isCollapsed = false;

  @Input() issue : IssuesModel;

  constructor() { }

  ngOnInit() {
  }

}
