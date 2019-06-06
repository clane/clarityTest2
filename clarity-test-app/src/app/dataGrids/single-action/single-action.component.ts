import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface User {
  id: number;
  name: string;
  creation: Date;
  color: string;

}


@Component({
  selector: 'app-single-action',
  templateUrl: './single-action.component.html',
  styleUrls: ['./single-action.component.css']
})
export class SingleActionComponent implements OnInit {

  constructor(private titleService: Title) { }
  componentTitle = 'Data Grid - Single Action';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

  toEdit: User;
  singleToDelete: User;


  users = [
    { id: "1", name: "Kevin", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "blue" },
    { id: "2", name: "Jet", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "red" },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green" },
  ];

  singleCleanUp(): void {
    this.toEdit = null;
  }

  singleOnEdit(user: User) {
    this.toEdit = user;
  }

  singleOnDelete(user: User) {
    this.singleToDelete = user;
  }


}
