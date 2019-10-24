import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor() { }
  ngOnInit() {
  }

  @HostListener('change', ['$event.target.files']) emitFiles(fileList: FileList) {
    window.alert('working...');
  }
}
