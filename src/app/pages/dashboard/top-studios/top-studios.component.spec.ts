import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

import { TopStudiosComponent } from './top-studios.component';

describe('TopStudiosComponent', () => {
  let component: TopStudiosComponent;
  let fixture: ComponentFixture<TopStudiosComponent>;

  beforeEach(async () => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'pipe']);
    const toastrServiceSpy = jasmine.createSpyObj('HttpClient', ['error']);
    await TestBed.configureTestingModule({
      providers: [ TopStudiosComponent, 
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: ToastrService, useValue: toastrServiceSpy }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
