import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { IntervalProducerService } from './interval-producer/interval-producer.service';

import { ProducersComponent } from './producers.component';

const intervalProducerServiceSpy = {
  getIntervalProducers() {
    const todos = [{
      "min": [
          {
              "producer": "Joel Silver",
              "interval": 1,
              "previousWin": 1990,
              "followingWin": 1991
          }
      ],
      "max": [
          {
              "producer": "Matthew Vaughn",
              "interval": 13,
              "previousWin": 2002,
              "followingWin": 2015
          }
      ]
  }];
    return of( todos );
  }
};


describe('ProducersComponent', () => {
  let component: ProducersComponent;
  let fixture: ComponentFixture<ProducersComponent>;

  beforeEach(async () => {
    const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['error']);
    await TestBed.configureTestingModule({
      providers: [ ProducersComponent,
        { provide: IntervalProducerService, useValue: intervalProducerServiceSpy },
        { provide: ToastrService, useValue: toastrServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
