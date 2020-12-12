import { TestBed } from '@angular/core/testing';

import { SpaceResolverService } from './space-resolver.service';

describe('SpaceResolverService', () => {
  let service: SpaceResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
