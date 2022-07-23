import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalProducerComponent } from './interval-producer.component';

describe('IntervalProducerComponent', () => {
  let component: IntervalProducerComponent;
  let fixture: ComponentFixture<IntervalProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalProducerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
