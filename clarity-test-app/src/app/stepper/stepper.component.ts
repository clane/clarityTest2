import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  form: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      name: this.formBuilder.group({
        first: ['', Validators.required],
        last: ['', Validators.required],
      }),
      contact: this.formBuilder.group({
        email: [],
        phone: [],
      }),
      password: this.formBuilder.group({
        password: [],
        confirm: [],
      }),
    });


  }

  componentTitle = 'Stepper Examples';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

}
