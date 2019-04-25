import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSortingComponent } from './custom-sorting.component';

describe('CustomSortingComponent', () => {
  let component: CustomSortingComponent;
  let fixture: ComponentFixture<CustomSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
