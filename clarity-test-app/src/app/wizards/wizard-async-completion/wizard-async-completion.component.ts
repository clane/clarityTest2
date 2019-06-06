import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'app-wizard-async-completion',
  templateUrl: './wizard-async-completion.component.html',
  styleUrls: ['./wizard-async-completion.component.css']
})
export class WizardAsyncCompletionComponent implements OnInit {

  
  constructor(private titleService: Title) { }

  componentTitle = 'Wizards - Wizard Async Completion';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;
  @ViewChild("wizard") wizard: ClrWizard;
  @ViewChild("myForm") formData: any;
  @ViewChild("myFinishPage") finishPage: any;

  loadingFlag: boolean = false;
  errorFlag: boolean = false;
  checked = false;
  finished = false;
  open: boolean = false;
  answer: number = null;

  // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...
    doCancel(): void {
      this.wizard.close();
  }

  get showCongrats(): boolean {
    return !this.errorFlag && this.checked;
  }

  resetFinalPage(): void {
    this.loadingFlag = false;
    this.errorFlag = false;
    this.checked = false;
  }

  goBack(): void {
    this.wizard.previous();
  }

  doFinish(): void {
    this.wizard.forceFinish();
    this.resetFinalPage();
  }

  onCommit(): void {
      let value: any = this.formData.value;
      this.loadingFlag = true;
      this.errorFlag = false;

      if (this.finished) {
        this.doFinish();
        return;
      }

      setTimeout(() => {
          if (value.answer === "42") {
            this.finished = true;
          } else {
              this.finishPage.completed = false;
              this.errorFlag = true;
          }
          this.checked = true;
          this.loadingFlag = false;
      }, 1000);
  }


  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }


}
