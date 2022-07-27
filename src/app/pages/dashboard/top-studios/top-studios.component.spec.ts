import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

import { TopStudiosComponent } from './top-studios.component';
import { TopStudiosService } from './top-studios.service';

const topStudiosServiceSpy = {
  getStudios() {
    const todos = [{
      "studios": [
        {
          "name": "Columbia Pictures",
          "winCount": 7
        },
        {
          "name": "Paramount Pictures",
          "winCount": 6
        },
        {
          "name": "Warner Bros.",
          "winCount": 5
        },
        {
          "name": "20th Century Fox",
          "winCount": 4
        }
      ]
    }
    ];
    return of(todos);
  }
};

describe('TopStudiosComponent', () => {
  let component: TopStudiosComponent;
  let fixture: ComponentFixture<TopStudiosComponent>;

  beforeEach(async () => {
    const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['error']);
    await TestBed.configureTestingModule({
      providers: [TopStudiosComponent,
        { provide: TopStudiosService, useValue: topStudiosServiceSpy },
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
