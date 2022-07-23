import { TestBed } from '@angular/core/testing';

import { TopStudiosService } from './top-studios.service';

describe('TopStudiosService', () => {
  let service: TopStudiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopStudiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
