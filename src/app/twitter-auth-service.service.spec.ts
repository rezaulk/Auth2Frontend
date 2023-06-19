import { TestBed } from '@angular/core/testing';

import { TwitterAuthServiceService } from './twitter-auth-service.service';

describe('TwitterAuthServiceService', () => {
  let service: TwitterAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
