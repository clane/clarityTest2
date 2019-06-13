import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stackview-edit',
  templateUrl: './stackview-edit.component.html',
  styleUrls: ['./stackview-edit.component.css']
})
export class StackviewEditComponent implements OnInit {

  constructor(private titleService: Title) { }

  componentTitle = 'Stack View Edit';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

}
