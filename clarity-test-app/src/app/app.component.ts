import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clarity-test-app';
  clrVersion = '8.0.0-beta.0';
  ngVersion = '8.0.0-rc.0';
  userAgent = navigator.userAgent;
  @ViewChild('testArea') skipTarget :ElementRef;

  skip(event: Event){
    event.preventDefault();
    this.skipTarget.nativeElement.focus();
   
  
  }
}
