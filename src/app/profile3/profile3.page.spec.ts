import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile3Page } from './profile3.page';

describe('Profile3Page', () => {
  let component: Profile3Page;
  let fixture: ComponentFixture<Profile3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
