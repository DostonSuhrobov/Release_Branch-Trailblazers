import { TestBed } from '@angular/core/testing';

import { MovieCardsService } from './movieCards.service';

describe('MovieCardsService', () => {
  let service: MovieCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
