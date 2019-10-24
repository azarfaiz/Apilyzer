import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RulesetModel} from '../model/ruleset.model';

@Component({
  selector: 'app-rule-set',
  templateUrl: './rule-set.component.html',
  styleUrls: ['./rule-set.component.scss']
})
export class RuleSetComponent implements OnInit {

  @Input() ruleSet: RulesetModel;
  @Output() fixed = new EventEmitter<RulesetModel>();

  constructor() {
  }

  ngOnInit() {
  }

  onFixed($event: any) {
    this.ruleSet.score += $event;
    this.fixed.emit(this.ruleSet);
  }
}
