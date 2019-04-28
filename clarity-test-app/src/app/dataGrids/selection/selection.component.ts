import { Component, OnInit } from '@angular/core';


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

  constructor() { }

  selected: User[] = [];

  users = [
        {id:"1", name:"Kevin", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"blue"},
        {id:"2", name:"Jet", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"red",},
        {id:"3", name:"Fred", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"green",},
    ];




  ngOnInit() {
  }

}
