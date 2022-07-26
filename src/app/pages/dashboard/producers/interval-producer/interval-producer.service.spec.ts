import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { IntervalProducerService } from './interval-producer.service';

describe('IntervalProducerService', () => {
  let service: IntervalProducerService;

  beforeEach(() => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [ IntervalProducerService, 
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(IntervalProducerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
