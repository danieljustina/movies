import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

import { ListMoviesYearComponent } from './list-movies-year.component';

describe('ListMoviesYearComponent', () => {
  let component: ListMoviesYearComponent;
  let fixture: ComponentFixture<ListMoviesYearComponent>;

  beforeEach(async () => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    const toastrServiceSpy = jasmine.createSpyObj('HttpClient', ['error']);
    await TestBed.configureTestingModule({
      providers: [ ListMoviesYearComponent, 
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: ToastrService, useValue: toastrServiceSpy }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMoviesYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
