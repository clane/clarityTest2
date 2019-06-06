import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';




export interface User {
  id: number;
  name: string;
  creation: Date;
  color: string;

  // Type for dynamic access to specific properties
  [key: string]: any;
}


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  constructor(private titleService: Title) { }
  componentTitle = 'Data Grid - Selection';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

  selected: User[] = [];

  users = [
        {id:"1", name:"Kevin", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"blue"},
        {id:"2", name:"Jet", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"red",},
        {id:"3", name:"Fred", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"green",},
    ];

}
