import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'app-wizard-async-completion',
  templateUrl: './wizard-async-completion.component.html',
  styleUrls: ['./wizard-async-completion.component.css']
})
export class WizardAsyncCompletionComponent implements OnInit {

  constructor() { }

  constructor(private titleService: Title) { }

  componentTitle = 'Wizards - Wizard Async Completion';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;


  ngOnInit() {
  }

}
