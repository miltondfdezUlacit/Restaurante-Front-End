import { TestBed } from '@angular/core/testing';

import { BebidasheladasService } from './bebidasheladas.service';

describe('BebidasheladasService', () => {
  let service: BebidasheladasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BebidasheladasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
