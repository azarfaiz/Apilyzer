import {Component, Input, OnInit} from '@angular/core';
import {NameValueModel} from '../model/name.value.model';

@Component({
  selector: 'app-pie-grid',
  templateUrl: './pie-grid.component.html',
  styleUrls: ['./pie-grid.component.scss']
})
export class PieGridComponent implements OnInit {

  @Input() name: string;
  @Input() value: number;

  data: NameValueModel[] = [];

  constructor() {
  }

  ngOnInit() {
    this.generateData();
  }

  private generateData() {
    this.data.push(new NameValueModel(this.name, this.value));
    this.data.push(new NameValueModel('Others', 100 - this.value));
  }
}
