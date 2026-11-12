import { TestBed } from '@angular/core/testing';

import { Loggingservice } from './loggingservice';

describe('Loggingservice', () => {
  let service: Loggingservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Loggingservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
