import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-column-ordering',
  templateUrl: './column-ordering.component.html',
  styleUrls: ['./column-ordering.component.css']
})
export class ColumnOrderingComponent implements OnInit {

  constructor(private titleService: Title) { }

  componentTitle = 'Grids - Column-Ordering';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

}



