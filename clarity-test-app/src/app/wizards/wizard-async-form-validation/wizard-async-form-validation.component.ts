import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wizard-async-form-validation',
  templateUrl: './wizard-async-form-validation.component.html',
  styleUrls: ['./wizard-async-form-validation.component.css']
})
export class WizardAsyncFormValidationComponent implements OnInit {

  constructor(private titleService: Title) { }

  componentTitle = 'Wizards - Wizard with Async Form Validation';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }


}
