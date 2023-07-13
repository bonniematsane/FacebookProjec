import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBar1Component } from './left-bar1.component';

describe('LeftBar1Component', () => {
  let component: LeftBar1Component;
  let fixture: ComponentFixture<LeftBar1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftBar1Component]
    });
    fixture = TestBed.createComponent(LeftBar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
