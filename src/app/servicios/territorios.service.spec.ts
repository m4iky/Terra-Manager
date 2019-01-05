import { TestBed } from '@angular/core/testing';

import { TerritoriosService } from './territorios.service';

describe('TerritoriosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerritoriosService = TestBed.get(TerritoriosService);
    expect(service).toBeTruthy();
  });
});
