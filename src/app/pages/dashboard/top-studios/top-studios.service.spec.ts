import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TopStudiosService } from './top-studios.service';

describe('TopStudiosService', () => {
  let service: TopStudiosService;

  beforeEach(() => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [ TopStudiosService, 
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(TopStudiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
