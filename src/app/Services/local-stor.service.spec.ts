import { TestBed } from '@angular/core/testing';

import { LocalStorService } from './local-stor.service';

describe('LocalStorService', () => {
  let service: LocalStorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
