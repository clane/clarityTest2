import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-stackview',
  templateUrl: './stackview.component.html',
  styleUrls: ['./stackview.component.css']
})
export class StackviewComponent implements OnInit {

  constructor(private titleService: Title) { }


  componentTitle = 'Stackview';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

}
