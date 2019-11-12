import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryModel} from '../../../model/category.model';

@Component({
  selector: 'app-rule-set',
  templateUrl: './rule-set.component.html',
  styleUrls: ['./rule-set.component.scss']
})
export class RuleSetComponent implements OnInit {

  @Input() category: CategoryModel;
  @Input() evalId: string;

  @Output() fixed = new EventEmitter<CategoryModel>();

  constructor() {
  }

  ngOnInit() {
  }

  onFixed($event: any) {
    this.category.score += $event;
    this.fixed.emit(this.category);
  }
}
