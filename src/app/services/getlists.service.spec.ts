import { TestBed } from '@angular/core/testing';

import { GetlistsService } from './getlists.service';

describe('GetlistsService', () => {
  let service: GetlistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetlistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
