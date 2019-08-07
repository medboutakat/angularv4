import { TestBed } from '@angular/core/testing';

import { RetourService } from './retour.service';

describe('RetourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetourService = TestBed.get(RetourService);
    expect(service).toBeTruthy();
  });
});
