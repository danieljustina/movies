import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WinnersYearService } from './winners-year.service';

describe('WinnersYearService', () => {
  let service: WinnersYearService;

  beforeEach(() => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [ WinnersYearService, 
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(WinnersYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
