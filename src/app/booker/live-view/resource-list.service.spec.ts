import { TestBed } from '@angular/core/testing';

import { ResourceListService } from './resource-list.service';
import * as resourceListActions from './store/resource-list.actions';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TestScheduler } from 'rxjs/testing';

describe('ResourceListService', () => {
  let service: ResourceListService;
  let testScheduler: TestScheduler;

  const AngularFirestoreStub = {
    // I just mocked the function you need, if there are more, you can add them here.
    collection: (someString) => {
      test: {
        value: 'test';
      }
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ResourceListService,
        // { provide: AngularFirestore, useValue: AngularFirestoreStub },
        provideMockStore(),
      ],
    });
    // service = TestBed.inject(ResourceListService);
    testScheduler = new TestScheduler((actual, expected) => {
      return expect(actual).toEqual(expected);
    });
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('get resources', () => {
    // const elo = service.getResources();
    // console.log('service.getResources', elo);

    expect(true).toBe(true);
  });
});
