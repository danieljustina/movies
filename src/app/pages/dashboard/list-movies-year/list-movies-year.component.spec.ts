import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviesYearComponent } from './list-movies-year.component';

describe('ListMoviesYearComponent', () => {
  let component: ListMoviesYearComponent;
  let fixture: ComponentFixture<ListMoviesYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMoviesYearComponent ]
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
