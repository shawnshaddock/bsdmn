import { TestBed, inject } from '@angular/core/testing';

import { MasternodeService } from './masternode.service';

describe('MasternodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasternodeService]
    });
  });

  it('should be created', inject([MasternodeService], (service: MasternodeService) => {
    expect(service).toBeTruthy();
  }));
});
