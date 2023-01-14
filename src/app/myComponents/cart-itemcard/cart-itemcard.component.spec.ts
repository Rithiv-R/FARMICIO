import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemcardComponent } from './cart-itemcard.component';

describe('CartItemcardComponent', () => {
  let component: CartItemcardComponent;
  let fixture: ComponentFixture<CartItemcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
