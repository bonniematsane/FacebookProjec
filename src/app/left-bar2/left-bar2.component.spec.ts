import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBar2Component } from './left-bar2.component';

describe('LeftBar2Component', () => {
  let component: LeftBar2Component;
  let fixture: ComponentFixture<LeftBar2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftBar2Component]
    });
    fixture = TestBed.createComponent(LeftBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
