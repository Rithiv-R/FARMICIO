import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogin1Component } from './user-login1.component';

describe('UserLogin1Component', () => {
  let component: UserLogin1Component;
  let fixture: ComponentFixture<UserLogin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLogin1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLogin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
