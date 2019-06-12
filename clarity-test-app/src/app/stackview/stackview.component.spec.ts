import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackviewComponent } from './stackview.component';

describe('StackviewComponent', () => {
  let component: StackviewComponent;
  let fixture: ComponentFixture<StackviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
