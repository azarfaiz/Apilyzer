import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesConfigureComponent } from './rules-configure.component';

describe('RulesConfigureComponent', () => {
  let component: RulesConfigureComponent;
  let fixture: ComponentFixture<RulesConfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesConfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
