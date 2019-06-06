import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-standard-alert',
  templateUrl: './standard-alert.component.html',
  styleUrls: ['./standard-alert.component.css']
})
export class StandardAlertComponent implements OnInit {

  
  constructor(private titleService: Title) { }

  componentTitle = 'Alerts - Standard Alerts';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

}
