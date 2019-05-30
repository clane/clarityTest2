import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewIconsComponent } from './tree-view-icons.component';

describe('TreeViewIconsComponent', () => {
  let component: TreeViewIconsComponent;
  let fixture: ComponentFixture<TreeViewIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeViewIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeViewIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
