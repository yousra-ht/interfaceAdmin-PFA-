import { TestBed } from '@angular/core/testing';

import { FiliereServiceService } from './filiere-service.service';

describe('FiliereServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiliereServiceService = TestBed.get(FiliereServiceService);
    expect(service).toBeTruthy();
  });
});
