import {Component, Input, OnInit} from '@angular/core';
import {RulesetModel} from "../model/ruleset.model";
import {IssuesModel} from "../model/issues.model";

@Component({
  selector: 'app-rule-set',
  templateUrl: './rule-set.component.html',
  styleUrls: ['./rule-set.component.scss']
})
export class RuleSetComponent implements OnInit {

  @Input() ruleSet: RulesetModel;

  constructor() {
  }

  ngOnInit() {
  }

}
