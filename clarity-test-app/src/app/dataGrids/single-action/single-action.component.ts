import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-action',
  templateUrl: './single-action.component.html',
  styleUrls: ['./single-action.component.css']
})
export class SingleActionComponent implements OnInit {

  constructor() { }


users = [
        {id:"1", name:"Kevin", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"blue", pokemon:{"name":"Kabuto","number":1}},
        {id:"2", name:"Jet", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"red", pokemon:{"name":"Muk","number":2}},
        {id:"3", name:"Fred", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"green", pokemon:{"name":"Tentacool","number":3}},
];


    singleCleanUp(): void {
        this.toDelete = null;
        this.toEdit = null;
    }

    singleOnEdit(user: User) {
        this.toEdit = user;
    }

    singleOnDelete(user: User) {
        this.singleToDelete = user;
    }



  ngOnInit() {
  }

}
