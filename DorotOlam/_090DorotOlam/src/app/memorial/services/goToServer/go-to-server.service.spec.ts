import { TestBed } from '@angular/core/testing';

import { GoToServerService } from './go-to-server.service';

describe('GoToServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoToServerService = TestBed.get(GoToServerService);
    expect(service).toBeTruthy();
  });
});
