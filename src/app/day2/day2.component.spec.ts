import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Component } from './day2.component';

describe('Day2Component', () => {
  let component: Day2Component;
  let fixture: ComponentFixture<Day2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
