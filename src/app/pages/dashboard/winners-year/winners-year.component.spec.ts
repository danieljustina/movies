import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersYearComponent } from './winners-year.component';

describe('WinnersYearComponent', () => {
  let component: WinnersYearComponent;
  let fixture: ComponentFixture<WinnersYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnersYearComponent ]
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
