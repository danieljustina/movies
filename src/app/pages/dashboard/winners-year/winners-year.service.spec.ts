import { TestBed } from '@angular/core/testing';

import { WinnersYearService } from './winners-year.service';

describe('WinnersYearService', () => {
  let service: WinnersYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinnersYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
