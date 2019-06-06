import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardSkipStepComponent } from './wizard-skip-step.component';

describe('WizardSkipStepComponent', () => {
  let component: WizardSkipStepComponent;
  let fixture: ComponentFixture<WizardSkipStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardSkipStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardSkipStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
