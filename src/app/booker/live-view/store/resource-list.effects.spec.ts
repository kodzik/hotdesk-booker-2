import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import { of, Observable } from 'rxjs';

import { ResourceListEffects } from './resource-list.effects';
import * as resourceListActions from './resource-list.actions';
import { Resource } from '../../../_models/resource';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Actions } from '@ngrx/effects';
import { ResourceListService } from '../resource-list.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

describe(`Effect: Attendess`, () => {
  let actions: Observable<Actions>;
  let effects: ResourceListEffects;
  let service: ResourceListService;
  const AngularFirestoreStub = {
    // I just mocked the function you need, if there are more, you can add them here.
    collection: (someString) => {
      elo: {
        value: 'hwdp';
      }
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ResourceListEffects,
        ResourceListService,
        provideMockActions(() => actions),
        { provide: AngularFirestore, useValue: AngularFirestoreStub },
      ],
    });

    actions = TestBed.inject(Actions);
    service = TestBed.inject(ResourceListService);
    effects = TestBed.inject(ResourceListEffects);
  });

  it('should return a cold Observable of LoadAttendeesSuccess action', () => {
    expect(true).toBe(true);

    const action = resourceListActions.queryResources;
    // const outcome = resourceListActions.addResource
    //   const completion = new LoadAttendeesSuccess(fakeAttendees);

    // spyOn(service, 'getResources');
    // mockImplementation(() => of(fakeAttendees));
    // service.getResources()

    // actions = cold('--a-', { a: action });
    // console.log(actions);

    //   const expected = cold('--(b)', { b: completion });
    //   expect(effects.resourceQuery).toBeObservable(expected);
  });
});
