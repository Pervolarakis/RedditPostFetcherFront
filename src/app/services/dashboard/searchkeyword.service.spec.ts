import { TestBed } from '@angular/core/testing';

import { SearchkeywordService } from './searchkeyword.service';

describe('SearchkeywordService', () => {
  let service: SearchkeywordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchkeywordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
