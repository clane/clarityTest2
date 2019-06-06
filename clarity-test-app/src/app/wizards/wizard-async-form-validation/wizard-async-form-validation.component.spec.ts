import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardAsyncFormValidationComponent } from './wizard-async-form-validation.component';

describe('WizardAsyncFormValidationComponent', () => {
  let component: WizardAsyncFormValidationComponent;
  let fixture: ComponentFixture<WizardAsyncFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardAsyncFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardAsyncFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
