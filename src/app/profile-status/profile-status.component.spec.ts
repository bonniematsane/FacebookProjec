import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStatusComponent } from './profile-status.component';

describe('ProfileStatusComponent', () => {
  let component: ProfileStatusComponent;
  let fixture: ComponentFixture<ProfileStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileStatusComponent]
    });
    fixture = TestBed.createComponent(ProfileStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
