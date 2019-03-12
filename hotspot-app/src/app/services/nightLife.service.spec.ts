import { TestBed } from '@angular/core/testing';

import { nightLifeService } from './nightLife.service';

describe('nightLifeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: nightLifeService = TestBed.get(nightLifeService);
    expect(service).toBeTruthy();
  });
});
