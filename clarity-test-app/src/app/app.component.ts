import { Component } from '@angular/core';
import { RoutingSignalService } from './routing-signal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private routingSignalService: RoutingSignalService) {}
    title = 'clarity-test-app';
    version = '8.0.0-beta.0';

}
