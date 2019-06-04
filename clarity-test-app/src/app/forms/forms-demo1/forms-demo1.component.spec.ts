import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDemo1Component } from './forms-demo1.component';

describe('FormsDemo1Component', () => {
  let component: FormsDemo1Component;
  let fixture: ComponentFixture<FormsDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
