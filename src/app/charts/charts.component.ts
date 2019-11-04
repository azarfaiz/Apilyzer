import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RulesetModel} from '../model/ruleset.model';
import {RulesetData} from '../rules-set/ruleset.data';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, OnChanges {

  rules: RulesetModel[];
  hide = false;

  constructor() {
    this.rules = new RulesetData().ruleSet;
  }

  ngOnInit() {

  }

  updateScore($event: RulesetModel) {
    const rulesetModel = this.rules.find(v => v.category === $event.category);
    rulesetModel.score = $event.score;
    this.reload();
  }

  reload() {
    this.hide = true;
    setTimeout(() => this.hide = false, 1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    window.alert('...');
  }

  download() {
    window.open('assets/download.json', '_blank');
  }
}
