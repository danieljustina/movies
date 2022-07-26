import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

import { ListMoviesComponent } from './list-movies.component';

describe('ListMoviesComponent', () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;

  beforeEach(async () => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    const toastrServiceSpy = jasmine.createSpyObj('HttpClient', ['error']);
    await TestBed.configureTestingModule({
      providers: [ ListMoviesComponent, 
        { provide: HttpClient, useValue: httpClientSpy },
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
