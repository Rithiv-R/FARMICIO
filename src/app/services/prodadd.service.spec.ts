import { TestBed } from '@angular/core/testing';

import { ProdaddService } from './prodadd.service';

describe('ProdaddService', () => {
  let service: ProdaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
