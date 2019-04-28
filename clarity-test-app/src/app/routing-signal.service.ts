import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutingSignalService {

  constructor() { }

	onRoute = new EventEmitter<any>();

}
