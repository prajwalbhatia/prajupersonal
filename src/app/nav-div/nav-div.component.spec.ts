import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDivComponent } from './nav-div.component';

describe('NavDivComponent', () => {
  let component: NavDivComponent;
  let fixture: ComponentFixture<NavDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
