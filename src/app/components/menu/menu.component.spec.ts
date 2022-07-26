import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      providers: [ MenuComponent, 
        { provide: Router, useValue: routerSpy },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
