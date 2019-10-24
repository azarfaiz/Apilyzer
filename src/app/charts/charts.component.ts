import {Component, OnInit} from '@angular/core';
import {RulesetModel} from '../model/ruleset.model';
import {ruleSet} from "../rules-set/ruleset.data";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  rules: RulesetModel[];

  constructor() {
    this.rules = ruleSet;
  }

  ngOnInit() {

  }

}
