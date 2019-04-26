import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-action',
  templateUrl: './batch-action.component.html',
  styleUrls: ['./batch-action.component.css']
})
export class BatchActionComponent implements OnInit {

  constructor() { }

   toAdd: User[] = [];
   toDelete: User[] = [];
   toEdit: User;
   toExport: User[] = [];
   
   selected: User[] = [];

 users = [
        {id:"1", name:"Kevin", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"blue", pokemon:{"name":"Kabuto","number":1}},
        {id:"2", name:"Jet", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"red", pokemon:{"name":"Muk","number":2}},
        {id:"3", name:"Fred", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"green", pokemon:{"name":"Tentacool","number":3}},
    ];


  ngOnInit() {
  }

}
