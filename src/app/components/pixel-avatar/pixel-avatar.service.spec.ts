import { TestBed } from '@angular/core/testing';

import { PixelAvatarService } from './pixel-avatar.service';

describe('PixelAvatarService', () => {
  let service: PixelAvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PixelAvatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
