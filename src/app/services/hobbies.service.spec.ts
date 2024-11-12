import { TestBed } from '@angular/core/testing';

import { HobbyService } from './hobbies.service';

describe('HobbiesService', () => {
  let service: HobbyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HobbyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
