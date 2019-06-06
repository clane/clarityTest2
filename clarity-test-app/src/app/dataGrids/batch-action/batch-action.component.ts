import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface User {
  id: String;
  name: String;
  creation: String;
  color: String;
}

@Component({
  selector: 'app-batch-action',
  templateUrl: './batch-action.component.html',
  styleUrls: ['./batch-action.component.css']
})
export class BatchActionComponent implements OnInit {

  constructor(private titleService: Title) { }
  componentTitle = 'Data Grid - Batch Action';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

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


    cleanUp(): void {
        this.toAdd = [];
        this.toDelete = [];
        this.toEdit = null;
        this.toExport = [];
    }

    onAdd() {
        this.cleanUp();
        this.toAdd = this.selected.slice();
    }

    onEdit() {
        this.cleanUp();
        this.toEdit = this.selected[0];
    }

    onDelete() {
        this.cleanUp();
        this.toDelete = this.selected.slice();
    }

    onExportAll() {
        this.cleanUp();
        this.toExport = this.users.slice();
      
    }

    onExportSelected() {
        this.cleanUp();
        this.toExport = this.selected.slice();

    }


}
