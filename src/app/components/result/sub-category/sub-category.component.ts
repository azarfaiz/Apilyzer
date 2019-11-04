import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SubCategoryModel} from '../../../model/sub-category.model';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  @Input() subCategory: SubCategoryModel;
  @Output() fixed = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onFixed($event: any) {
    this.fixed.emit($event);
  }
}
