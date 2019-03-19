import { TestBed } from '@angular/core/testing';

import { StatutService } from './statut.service';

describe('StatutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatutService = TestBed.get(StatutService);
    expect(service).toBeTruthy();
  });
});
