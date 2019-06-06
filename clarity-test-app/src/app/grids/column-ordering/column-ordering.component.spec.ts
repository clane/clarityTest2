import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnOrderingComponent } from './column-ordering.component';

describe('ColumnOrderingComponent', () => {
  let component: ColumnOrderingComponent;
  let fixture: ComponentFixture<ColumnOrderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnOrderingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
