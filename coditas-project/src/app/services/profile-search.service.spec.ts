import { TestBed } from '@angular/core/testing';

import { ProfileSearchService } from './profile-search.service';

describe('ProfileSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileSearchService = TestBed.get(ProfileSearchService);
    expect(service).toBeTruthy();
  });
});
