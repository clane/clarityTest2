import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signpost',
  templateUrl: './signpost.component.html',
  styleUrls: ['./signpost.component.css']
})
export class SignpostComponent implements OnInit {

  constructor(private titleService: Title) { }


  componentTitle = 'Signpost';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }
}
