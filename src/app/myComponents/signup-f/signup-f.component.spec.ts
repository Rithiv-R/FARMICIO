import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFComponent } from './signup-f.component';

describe('SignupFComponent', () => {
  let component: SignupFComponent;
  let fixture: ComponentFixture<SignupFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
