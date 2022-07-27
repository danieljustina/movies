import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

import { ListMoviesComponent } from './list-movies.component';
import { ListMoviesService } from './list-movies.service';

const listMoviesServiceSpy = {
  getWinnersYear() {
    const todos = [{
      "content": [
          {
              "id": 1,
              "year": 1980,
              "title": "Can't Stop the Music",
              "winner": true
          }
      ],
      "totalPages": 206,
      "totalElements": 206,
      "number": 0,
      "numberOfElements": 1,
      "size": 1,
      "empty": false
  }];
    return of( todos );
  }
};

describe('ListMoviesComponent', () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;

  beforeEach(async () => {
    const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['error']);
    await TestBed.configureTestingModule({
      providers: [ ListMoviesComponent, 
        { provide: ListMoviesService, useValue: listMoviesServiceSpy },
        { provide: ToastrService, useValue: toastrServiceSpy }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
