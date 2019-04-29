import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableRowsComponent } from './expandable-rows.component';

describe('ExpandableRowsComponent', () => {
  let component: ExpandableRowsComponent;
  let fixture: ComponentFixture<ExpandableRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
