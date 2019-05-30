import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';




@Component({
  selector: 'app-tree-view-checkbox',
  templateUrl: './tree-view-checkbox.component.html',
  styleUrls: ['./tree-view-checkbox.component.css']
})
export class TreeViewCheckboxComponent implements OnInit {

  constructor(private titleService: Title) { }

  permissions: any = [
    {
      type: 'Authenticated Users',
      expanded: true,
      rights: [
        {
          name: 'Read',
          enable: true,
        },
        {
          name: 'Modify',
          enable: false,
        },
      ],
    },
    {
      type: 'Owners',
      expanded: true,
      rights: [
        {
          name: 'Read',
          enable: true,
        },
        {
          name: 'Modify',
          enable: true,
        },
      ],
    },
    {
      type: 'Public',
      expanded: true,
      rights: [
        {
          name: 'Read',
          enable: false,
        },
        {
          name: 'Modify',
          enable: true,
        },
      ],
    },
  ];

  

  componentTitle = 'Tree View - Checkbox';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

}
