import { TestBed } from '@angular/core/testing';

import { OrdershowService } from './ordershow.service';

describe('OrdershowService', () => {
  let service: OrdershowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdershowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
