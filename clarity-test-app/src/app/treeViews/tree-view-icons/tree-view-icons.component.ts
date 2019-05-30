import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tree-view-icons',
  templateUrl: './tree-view-icons.component.html',
  styleUrls: ['./tree-view-icons.component.css']
})
export class TreeViewIconsComponent implements OnInit {

  constructor(private titleService: Title) { }

  componentTitle = 'Tree View - Icons';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

}
