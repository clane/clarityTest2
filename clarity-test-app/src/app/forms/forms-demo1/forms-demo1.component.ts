import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forms-demo1',
  templateUrl: './forms-demo1.component.html',
  styleUrls: ['./forms-demo1.component.css']
})
export class FormsDemo1Component implements OnInit {

  constructor(private titleService: Title) { }

  componentTitle = 'Form Demo 1';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

}
