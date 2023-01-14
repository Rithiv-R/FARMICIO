import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSummComponent } from './cart-summ.component';

describe('CartSummComponent', () => {
  let component: CartSummComponent;
  let fixture: ComponentFixture<CartSummComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSummComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSummComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
