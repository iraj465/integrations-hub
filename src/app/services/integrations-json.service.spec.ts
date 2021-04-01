import { TestBed } from '@angular/core/testing';

import { IntegrationsJsonService } from './integrations-json.service';

describe('IntegrationsJsonService', () => {
  let service: IntegrationsJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegrationsJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
