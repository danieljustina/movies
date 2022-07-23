import { TestBed } from '@angular/core/testing';

import { ListMoviesYearService } from './list-movies-year.service';

describe('ListMoviesYearService', () => {
  let service: ListMoviesYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListMoviesYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
