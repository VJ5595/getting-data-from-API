import { TestBed, inject } from '@angular/core/testing';

import { CatogoryService } from './catogory.service';

describe('CatogoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatogoryService]
    });
  });

  it('should be created', inject([CatogoryService], (service: CatogoryService) => {
    expect(service).toBeTruthy();
  }));
});
