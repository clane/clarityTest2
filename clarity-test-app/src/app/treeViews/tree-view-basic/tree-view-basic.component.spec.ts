import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewBasicComponent } from './tree-view-basic.component';

describe('TreeViewBasicComponent', () => {
  let component: TreeViewBasicComponent;
  let fixture: ComponentFixture<TreeViewBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeViewBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeViewBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
