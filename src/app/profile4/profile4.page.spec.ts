import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile4Page } from './profile4.page';

describe('Profile4Page', () => {
  let component: Profile4Page;
  let fixture: ComponentFixture<Profile4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
