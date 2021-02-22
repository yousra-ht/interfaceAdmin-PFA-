import { TestBed } from '@angular/core/testing';

import { MenuHeadService } from './menu-head.service';

describe('MenuHeadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuHeadService = TestBed.get(MenuHeadService);
    expect(service).toBeTruthy();
  });
});
