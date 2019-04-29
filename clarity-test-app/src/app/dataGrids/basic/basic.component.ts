import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'datagrid-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor(private titleService: Title) { }
  componentTitle = 'Data Grid - Basic Structure';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

  users = [
    { id: "1", name: "Kevin", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "blue", pokemon: { "name": "Kabuto", "number": 1 } },
    { id: "2", name: "Jet", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "red", pokemon: { "name": "Muk", "number": 2 } },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "4", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "5", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "6", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
  ];




}
