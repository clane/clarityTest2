import { TestBed } from '@angular/core/testing';

import { RoutingSignalService } from './routing-signal.service';

describe('RoutingSignalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutingSignalService = TestBed.get(RoutingSignalService);
    expect(service).toBeTruthy();
  });
});
