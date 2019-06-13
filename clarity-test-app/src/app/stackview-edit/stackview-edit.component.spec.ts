import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackviewEditComponent } from './stackview-edit.component';

describe('StackviewEditComponent', () => {
  let component: StackviewEditComponent;
  let fixture: ComponentFixture<StackviewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackviewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackviewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
