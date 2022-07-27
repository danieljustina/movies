import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

import { WinnersYearComponent } from './winners-year.component';
import { WinnersYearService } from './winners-year.service';

const winnersYearServiceSpy = {
  getWinnersYear() {
    const todos = [{
      "years": [
          {
              "year": 1986,
              "winnerCount": 2
          },
          {
              "year": 1990,
              "winnerCount": 2
          },
          {
              "year": 2015,
              "winnerCount": 2
          }
      ]
  }];
    return of( todos );
  }
};

describe('WinnersYearComponent', () => {
  let component: WinnersYearComponent;
  let fixture: ComponentFixture<WinnersYearComponent>;

  beforeEach(async () => {
    const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['error']);
    await TestBed.configureTestingModule({
      declarations: [ ],
      providers: [ WinnersYearComponent,
        { provide: WinnersYearService, useValue: winnersYearServiceSpy },
        { provide: ToastrService, useValue: toastrServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnersYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
