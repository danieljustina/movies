import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ListMoviesService } from './list-movies.service';

describe('ListMoviesService', () => {
  let service: ListMoviesService;

  beforeEach(() => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [ ListMoviesService, 
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(ListMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
