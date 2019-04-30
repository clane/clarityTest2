import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clarity-test-app';
  version = '8.0.0-beta.0';
  @ViewChild('skipLink') skipTarget :ElementRef;

  skip(event){
    console.log('skip');
    event.preventDefault();
    this.skipTarget.nativeElement.focus();
  
  }
}
