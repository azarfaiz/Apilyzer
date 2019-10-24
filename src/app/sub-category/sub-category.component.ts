import {Component, Input, OnInit} from '@angular/core';
import {SubCategoryModel} from "../model/sub-category.model";

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  @Input() subCategory : SubCategoryModel;

  constructor() { }

  ngOnInit() {
  }

}
