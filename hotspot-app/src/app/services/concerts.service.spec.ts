import { TestBed } from '@angular/core/testing';

import { ConcertsService } from './concerts.service';

describe('SportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConcertsService = TestBed.get(ConcertsService);
    expect(service).toBeTruthy();
  });
});
