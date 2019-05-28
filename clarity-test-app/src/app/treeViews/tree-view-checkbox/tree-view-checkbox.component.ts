import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tree-view-checkbox',
  templateUrl: './tree-view-checkbox.component.html',
  styleUrls: ['./tree-view-checkbox.component.css']
})
export class TreeViewCheckboxComponent implements OnInit {

  constructor(private titleService: Title) { }

  componentTitle = 'Tree View - Checkbox';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

}
