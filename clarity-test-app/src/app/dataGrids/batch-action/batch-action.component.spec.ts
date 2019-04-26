import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchActionComponent } from './batch-action.component';

describe('BatchActionComponent', () => {
  let component: BatchActionComponent;
  let fixture: ComponentFixture<BatchActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
