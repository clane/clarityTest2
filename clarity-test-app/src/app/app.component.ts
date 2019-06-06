<<<<<<< HEAD
import { Component } from '@angular/core';
import { RoutingSignalService } from './routing-signal.service';
=======
import { Component, ViewChild, ElementRef } from '@angular/core';
>>>>>>> 2284016089863a557969bff8b4a5f17e6756d8ff

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD

    constructor(private routingSignalService: RoutingSignalService) {}
    title = 'clarity-test-app';
    version = '8.0.0-beta.0';

=======
  title = 'clarity-test-app';
  clrVersion = 'v2.0.0-rc.1';
  ngVersion = '8.0.0-rc.1';
  userAgent = navigator.userAgent;
  @ViewChild('testArea') skipTarget :ElementRef;

  skip(event: Event){
    event.preventDefault();
    this.skipTarget.nativeElement.focus();
   
  
  }
>>>>>>> 2284016089863a557969bff8b4a5f17e6756d8ff
}
