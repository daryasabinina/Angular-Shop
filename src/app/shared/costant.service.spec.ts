import { TestBed } from '@angular/core/testing';

import { ConstantService } from './constant.service';

describe('CostantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstantService = TestBed.get(ConstantService);
    expect(service).toBeTruthy();
  });
});
