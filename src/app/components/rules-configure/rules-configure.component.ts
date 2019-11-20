import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AppService} from '../../service/app.service';
import {RuleWrapperModel} from '../../model/rule.wrapper.model';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {RuleModel} from '../../model/rule.model';

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
        let ruleModels: RuleModel[] = this.rules.rules;
        ruleModels = ruleModels.sort((a: RuleModel, b: RuleModel) => a.category.localeCompare(b.category));
        this.rules.rules = ruleModels;
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

  getRuleName(ruleName: string) {
    switch (ruleName) {
      case 'MISSING_INFO_DESC':
        return 'Validate \'Info\' description';
      case 'MISSING_SERVER_DESC':
        return 'Validate \'Server\' description';
      case 'HTTP_SECURITY_SCHEME':
        return 'Validate security scheme';
      case 'MISSING_SERVER_INFORMATION':
        return 'Validate \'Server\' information';
      case 'OPERATION_2XX_RESPONSE':
        return 'Validate status code';
      case 'MISSING_REQUEST_BODY_EXAMPLE':
        return 'Validate request payload';
      case 'MISSING_RESPONSE_EXAMPLE':
        return 'Validate response payload';
    }
  }
}
