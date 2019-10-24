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

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
  }

  ngOnInit() {
    this.generateData();

    if (this.value < 50) {
      this.colorScheme = {
        domain: ['#A10A28']
      };
    } else if (this.value >= 50 && this.value < 80) {
      this.colorScheme = {
        domain: ['#ffb300']
      };
    } else if (this.value >= 80) {
      this.colorScheme = {
        domain: ['#5AA454']
      };
    }
  }

  private generateData() {
    this.data.push(new NameValueModel(this.name, this.value));
    this.data.push(new NameValueModel('Others', 100 - this.value));
  }
}
