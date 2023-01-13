import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSComponent } from './signup-s.component';

describe('SignupSComponent', () => {
  let component: SignupSComponent;
  let fixture: ComponentFixture<SignupSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
