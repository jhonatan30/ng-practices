import { TestBed } from '@angular/core/testing';

import { NorrisJokeService } from './icndb-api.service';

describe('IcndbApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NorrisJokeService = TestBed.get(NorrisJokeService);
    expect(service).toBeTruthy();
  });
});
