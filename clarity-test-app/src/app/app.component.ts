import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clarity-test-app';
  ngVersion = '8.0.0-beta.0';
  userAgent = navigator.userAgent;
  @ViewChild('testArea') skipTarget :ElementRef;

  skip(event: Event){
    console.log('skip');
    event.preventDefault();
    this.skipTarget.nativeElement.focus();
   
  
  }
}
