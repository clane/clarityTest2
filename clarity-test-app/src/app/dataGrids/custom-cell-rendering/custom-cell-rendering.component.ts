import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-custom-cell-rendering',
  templateUrl: './custom-cell-rendering.component.html',
  styleUrls: ['./custom-cell-rendering.component.css']
})
export class CustomCellRenderingComponent implements OnInit {


  constructor(private titleService: Title) { }
  componentTitle = 'Data Grid - Custom Cell Rendering';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

  users = [
    { id: "1", name: "Kevin", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "blue" },
    { id: "2", name: "Jet", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "red" },
    { id: "3", name: "Fred", creation: "Mon Apr 22 10:00:51 PDT 2019", color: "green" },
  ];



}
