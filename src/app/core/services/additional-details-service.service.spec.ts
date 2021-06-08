import { TestBed } from '@angular/core/testing';

import { AdditionalDetailsServiceService } from './additional-details-service.service';

describe('AdditionalDetailsServiceService', () => {
  let service: AdditionalDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionalDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
