import { TestBed } from '@angular/core/testing';

import { TripService } from './trip.service';

describe('TripService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripService = TestBed.get(TripService);
    expect(service).toBeTruthy();
  });
});
