import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'app-wizard-skip-step',
  templateUrl: './wizard-skip-step.component.html',
  styleUrls: ['./wizard-skip-step.component.css']
})
export class WizardSkipStepComponent implements OnInit {


  constructor(private titleService: Title) { }

  componentTitle = 'Wizards - Wizard Skip Step';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;
  @ViewChild('wizard') wizard: ClrWizard;
  _open: boolean = false;

  skipStepTwo: boolean = true;

  toggleStepTwo() {
      this.skipStepTwo = !this.skipStepTwo;
  }

  open() {
      this._open = !this.open;
  }

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

}
