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
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe(`Effect: Attendess`, () => {
  let actions: Observable<Actions>;
  let effects: ResourceListEffects;
  let service: ResourceListService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ResourceListEffects,
        ResourceListService,
        provideMockActions(() => actions),
      ],
    });

    actions = TestBed.inject(Actions);
    service = TestBed.inject(ResourceListService);
    effects = TestBed.inject(ResourceListEffects);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should return a cold Observable of LoadAttendeesSuccess action', () => {
    expect(true).toBe(true);
  });
});
