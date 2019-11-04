import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CategoryModel} from '../../model/category.model';
import {RulesetData} from './rules-set/ruleset.data';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnChanges {

  rules: CategoryModel[];
  hide = false;

  constructor() {
    this.rules = new RulesetData().ruleSet;
  }

  ngOnInit() {

  }

  updateScore($event: CategoryModel) {
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
