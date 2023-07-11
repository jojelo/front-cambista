import { TestBed } from '@angular/core/testing';

import { CambistaService } from './cambista.service';

describe('CambistaService', () => {
  let service: CambistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CambistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
