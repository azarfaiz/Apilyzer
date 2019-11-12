import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AppService} from '../../service/app.service';
import {RuleWrapperModel} from '../../model/rule.wrapper.model';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-rules-configure',
  templateUrl: './rules-configure.component.html',
  styleUrls: ['./rules-configure.component.scss']
})
export class RulesConfigureComponent implements OnInit {

  rules: RuleWrapperModel;

  rulesForm = new FormGroup({
    rules: new FormArray([])
  });

  constructor(private service: AppService) {
  }

  ngOnInit() {
    this.loadAllRules();
  }

  private loadAllRules() {
    this.service.getAllConfiguredRules().subscribe(
      (response: RuleWrapperModel) => {
        this.rules = response;
        this.initRulesForm();
      }
    );
  }

  private initRulesForm() {
    this.rules.rules.forEach(v => {
      (this.rulesForm.get('rules') as FormArray).push(new FormControl(v.enabled));
    });
  }

  save() {
    this.rules.rules.forEach((v, i) => {
      v.enabled = this.rulesForm.value.rules[i];
    });

    this.service.updateConfiguredRules(this.rules).subscribe(
      () => window.alert('saved successfully')
    );
  }
}
