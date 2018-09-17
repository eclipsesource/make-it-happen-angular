import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5Component } from './day5.component';

describe('Day5Component', () => {
  let component: Day5Component;
  let fixture: ComponentFixture<Day5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day5Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
