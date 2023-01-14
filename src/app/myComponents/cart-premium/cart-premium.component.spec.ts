import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPremiumComponent } from './cart-premium.component';

describe('CartPremiumComponent', () => {
  let component: CartPremiumComponent;
  let fixture: ComponentFixture<CartPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
