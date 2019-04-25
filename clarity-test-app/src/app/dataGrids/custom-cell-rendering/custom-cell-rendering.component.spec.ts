import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCellRenderingComponent } from './custom-cell-rendering.component';

describe('CustomCellRenderingComponent', () => {
  let component: CustomCellRenderingComponent;
  let fixture: ComponentFixture<CustomCellRenderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCellRenderingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCellRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
