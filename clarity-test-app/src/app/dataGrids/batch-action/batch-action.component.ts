import { Component, OnInit } from '@angular/core';

export interface User {
  id: Number;
  name: String;
  creation: Date;
  color: String;
}

 
@Component({
  selector: 'app-batch-action',
  templateUrl: './batch-action.component.html',
  styleUrls: ['./batch-action.component.css']
})
export class BatchActionComponent implements OnInit {

  constructor() {}

   toAdd: User[] = [];
   toDelete: User[] = [];
   toEdit: User;
   toExport: User[] = [];
   selected: User[] = [];

 users = [
        {id:"1", name:"Kevin", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"blue"},
        {id:"2", name:"Jet", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"red"},
        {id:"3", name:"Fred", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"green" },
    ];


  ngOnInit() {
  }

    cleanUp(): void {
        this.toAdd = [];
        this.toDelete = [];
        this.toEdit = null;
        this.toExport = [];
    }

    onAdd() {
        this.cleanUp();
    }

    onEdit() {
        this.cleanUp();
    }

    onDelete() {
        this.cleanUp();
    }

    onExportAll() {
        this.cleanUp();
    }

    onExportSelected() {
        this.cleanUp();

    }


}
