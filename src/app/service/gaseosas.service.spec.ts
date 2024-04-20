import { TestBed } from '@angular/core/testing';

import { GaseosasService } from './gaseosas.service';

describe('GaseosasService', () => {
  let service: GaseosasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaseosasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
