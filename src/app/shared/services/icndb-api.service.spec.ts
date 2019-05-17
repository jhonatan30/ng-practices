import { TestBed } from '@angular/core/testing';

import { IcndbApiService } from './icndb-api.service';

describe('IcndbApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IcndbApiService = TestBed.get(IcndbApiService);
    expect(service).toBeTruthy();
  });
});
