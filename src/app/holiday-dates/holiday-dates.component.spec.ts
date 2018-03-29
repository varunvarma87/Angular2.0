import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayDatesComponent } from './holiday-dates.component';

describe('HolidayDatesComponent', () => {
  let component: HolidayDatesComponent;
  let fixture: ComponentFixture<HolidayDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
