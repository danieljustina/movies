import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ListMoviesYearService } from './list-movies-year.service';

describe('ListMoviesYearService', () => {
  let service: ListMoviesYearService;

  beforeEach(() => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [ ListMoviesYearService, 
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(ListMoviesYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
