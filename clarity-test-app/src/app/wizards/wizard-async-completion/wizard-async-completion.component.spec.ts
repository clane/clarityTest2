import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardAsyncCompletionComponent } from './wizard-async-completion.component';

describe('WizardAsyncCompletionComponent', () => {
  let component: WizardAsyncCompletionComponent;
  let fixture: ComponentFixture<WizardAsyncCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardAsyncCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardAsyncCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
