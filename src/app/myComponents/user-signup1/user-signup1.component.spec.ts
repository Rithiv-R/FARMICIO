import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignup1Component } from './user-signup1.component';

describe('UserSignup1Component', () => {
  let component: UserSignup1Component;
  let fixture: ComponentFixture<UserSignup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSignup1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSignup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
