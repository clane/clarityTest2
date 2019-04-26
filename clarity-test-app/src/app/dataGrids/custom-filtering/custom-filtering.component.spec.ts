import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFilteringComponent } from './custom-filtering.component';

describe('CustomFilteringComponent', () => {
  let component: CustomFilteringComponent;
  let fixture: ComponentFixture<CustomFilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
