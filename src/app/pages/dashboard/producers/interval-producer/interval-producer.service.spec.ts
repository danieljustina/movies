import { TestBed } from '@angular/core/testing';

import { IntervalProducerService } from './interval-producer.service';

describe('IntervalProducerService', () => {
  let service: IntervalProducerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntervalProducerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
