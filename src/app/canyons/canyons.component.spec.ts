/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CanyonsComponent } from './canyons.component';

describe('CanyonsComponent', () => {
  let component: CanyonsComponent;
  let fixture: ComponentFixture<CanyonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanyonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanyonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
