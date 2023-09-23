import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { fakeAsync } from '@angular/core/testing';
import { ResourceListService } from './resource-list.service';
import * as resourceListActions from './store/resource-list.actions';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestScheduler } from 'rxjs/testing';
import { Resource } from 'src/app/_models/resource';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ResourceListService', () => {
  let service: ResourceListService;
  let testScheduler: TestScheduler;
  let httpTestingController: HttpTestingController;

  let newService: ResourceListService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    newService = new ResourceListService(httpClientSpy);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResourceListService, provideMockStore()],
    });

    service = TestBed.inject(ResourceListService);
    httpTestingController = TestBed.inject(HttpTestingController);
    testScheduler = new TestScheduler((actual, expected) => {
      return expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected resources (HttpClient called once)', (done: DoneFn) => {
    const expectedResources: Resource[] = [
      { id: '1', name: 'A', available: true, reserved: false },
      { id: '2', name: 'B', available: false, reserved: true },
    ];

    httpClientSpy.get.and.returnValue(of(expectedResources));

    newService.getResources().subscribe({
      next: (resources) => {
        expect(resources).toBeTruthy();
        expect(resources)
          .withContext('expected resources')
          .toEqual(expectedResources);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
