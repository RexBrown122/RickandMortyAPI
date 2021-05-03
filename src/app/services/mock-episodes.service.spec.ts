import { TestBed } from '@angular/core/testing';

import { MockEpisodesService } from './mock-episodes.service';

describe('MockEpisodesService', () => {
  let service: MockEpisodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockEpisodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
