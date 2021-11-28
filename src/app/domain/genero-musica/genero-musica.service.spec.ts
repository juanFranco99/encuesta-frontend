import { TestBed } from '@angular/core/testing';

import { GeneroMusicaService } from './genero-musica.service';

describe('GeneroMusicaService', () => {
  let service: GeneroMusicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneroMusicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
