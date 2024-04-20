import { TestBed } from '@angular/core/testing';

import { BebidasCalientesService } from './bebidascalientes.service';

describe('BebidascalientesService', () => {
  let service: BebidasCalientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BebidasCalientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
