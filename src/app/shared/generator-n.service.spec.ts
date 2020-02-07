import { TestBed } from '@angular/core/testing';

import { GeneratorNService } from './generator-n.service';

describe('GeneratorNService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneratorNService = TestBed.get(GeneratorNService);
    expect(service).toBeTruthy();
  });
});
