import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-single-selection',
  templateUrl: './single-selection.component.html',
  styleUrls: ['./single-selection.component.css']
})
export class SingleSelectionComponent implements OnInit {

  constructor(private titleService: Title) { }
  componentTitle = 'Data Grid - Single Selection';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;
  selectedUser:string;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }




  users = [
    { id: "1", name: "Kevin", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "blue", pokemon: { "name": "Kabuto", "number": 1 } },
    { id: "2", name: "Jet", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "red", pokemon: { "name": "Muk", "number": 2 } },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green", pokemon: { "name": "Tentacool", "number": 3 } },
  ];
}
