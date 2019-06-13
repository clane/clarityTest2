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

    /*
     * Modal edit demo
     */
    blocks: any[] = [
      { title: 'Label 1', content: 'Content 1' },
      {
        title: 'Label 2',
        content: 'Content 2',
        children: [
          { title: 'Sub-label 1', content: 'Sub-content 1' },
          { title: 'Sub-label 2', content: 'Sub-content 2' },
          { title: 'Sub-label 3', content: 'Sub-content 3' },
        ],
      },
      { title: 'Label 3', content: 'Content 3' },
    ];
  
    editModal: boolean = false;
    

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

}
