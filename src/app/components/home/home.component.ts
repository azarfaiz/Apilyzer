import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../service/app.service';
import {EvaluationResultModel} from '../../model/evaluation.result.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;
  value = '';

  result: EvaluationResultModel;

  constructor(private router: Router, private service: AppService) {
  }

  ngOnInit() {
  }

  @HostListener('change', ['$event.target.files']) emitFiles(fileList: FileList) {
    const file = fileList.item(0);

    this.value = 'Uploading  ' + file.name + ' ... ';

    setTimeout(() => {
      this.value = 'Processing the Open API ... ';
    }, 1500);

    this.service.evaluate(file).subscribe(
      (response) => {
        this.result = response;
      }
    );

  }
}
