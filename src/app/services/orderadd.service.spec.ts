import { TestBed } from '@angular/core/testing';

import { OrderaddService } from './orderadd.service';

describe('OrderaddService', () => {
  let service: OrderaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
