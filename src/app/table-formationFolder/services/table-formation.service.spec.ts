import { TestBed } from '@angular/core/testing';
import { map } from "rxjs/operators";
import { TableFormationService } from './table-formation.service';

describe('TableFormationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableFormationService = TestBed.get(TableFormationService);
    expect(service).toBeTruthy();
  });
});
