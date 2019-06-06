import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'app-wizard-async-form-validation',
  templateUrl: './wizard-async-form-validation.component.html',
  styleUrls: ['./wizard-async-form-validation.component.css']
})
export class WizardAsyncFormValidationComponent implements OnInit {

  constructor(private titleService: Title) { }


  @ViewChild('wizard') wizard: ClrWizard;
  @ViewChild('myForm') formData: any;

  loadingFlag: boolean = false;
  errorFlag: boolean = false;
  answer: number = null;
  open: boolean = false;

  componentTitle = 'Wizards - Wizard with Async Form Validation';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;

  // have to define doCancel because page will prevent doCancel from working
  // if the page had a previous button, you would need to call
  // this.wizard.previous() manually as well...
  doCancel(): void {
    this.wizard.close();
  }

  onCommit(): void {
    const value: any = this.formData.value;
    this.loadingFlag = true;
    this.errorFlag = false;

    setTimeout(() => {
      if (value.answer === '42') {
        this.wizard.forceNext();
      } else {
        this.errorFlag = true;
      }
      this.loadingFlag = false;
    }, 1000);
  }



    
  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }


}
