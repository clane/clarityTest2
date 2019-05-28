import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tree-view-basic',
  templateUrl: './tree-view-basic.component.html',
  styleUrls: ['./tree-view-basic.component.css']
})
export class TreeViewBasicComponent implements OnInit {

  constructor(private titleService: Title) { }

  componentTitle = 'Tree View - Basic';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }
}
