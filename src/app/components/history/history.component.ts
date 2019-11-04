import {Component, OnInit} from '@angular/core';
import {sampleHistoryData} from './history.data';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  data = sampleHistoryData;

  constructor() {
  }

  ngOnInit() {
  }

}
