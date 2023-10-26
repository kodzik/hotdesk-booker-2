import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import { of, Observable, ReplaySubject, throwError } from 'rxjs';
import { ResourceListEffects } from './resource-list.effects';
import * as resourceListActions from '../actions/resource-list.actions';
import { Resource } from '../_models/resource';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Actions } from '@ngrx/effects';
import { ResourceListService } from '../services/resource-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mockResources } from '../../_test_data/mock_data';

describe(`Effect: Attendess`, () => {
  // let actions$: Observable<Actions>;
  let actions$: ReplaySubject<any>;

  let effects: ResourceListEffects;
  let service: ResourceListService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ResourceListEffects,
        ResourceListService,
        provideMockActions(() => actions$),
        {
          provide: ResourceListService,
          useValue: jasmine.createSpyObj('ResourceListService', [
            'getResources',
          ]),
        },
      ],
    })
  );

  beforeEach(() => {
    // actions$ = TestBed.inject(Actions);
    service = TestBed.inject(ResourceListService);
    effects = TestBed.inject(ResourceListEffects);
    (service.getResources as jasmine.Spy).and.returnValue(of(mockResources));
  });

  describe('resourceQuery', () => {
    xit('should return true', () => {});
  });
});
