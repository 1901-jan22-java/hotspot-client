import { TestBed } from '@angular/core/testing';

import { SpringAppService } from './spring-app.service';

describe('SpringAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpringAppService = TestBed.get(SpringAppService);
    expect(service).toBeTruthy();
  });
});
