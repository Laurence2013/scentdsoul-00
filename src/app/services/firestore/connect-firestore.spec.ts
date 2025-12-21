import { TestBed } from '@angular/core/testing';

import { ConnectFirestore } from './connect-firestore';

describe('ConnectFirestore', () => {
  let service: ConnectFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectFirestore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
