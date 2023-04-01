import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemcardComponent } from './orders-itemcard.component';

describe('OrdersItemcardComponent', () => {
  let component: OrdersItemcardComponent;
  let fixture: ComponentFixture<OrdersItemcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersItemcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
