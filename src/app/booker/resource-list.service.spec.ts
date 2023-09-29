import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResourceListService } from './resource-list.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { mockResources } from 'src/app/_test_data/mock_data';
import { cold } from 'jasmine-marbles';

describe('ResourceListService', () => {
  let service: ResourceListService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let http: HttpClient;

  const newMockService = jasmine.createSpyObj<ResourceListService>({
    getResources: of(mockResources),
  });

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ResourceListService(httpClientSpy);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ResourceListService, useValue: newMockService },
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('ResourceListService', [
            'getResources',
          ]),
        },
      ],
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should call the search api and return the search results', () => {
  //   const response = cold('-a|', { a: mockResources });
  //   const expected = cold('-b|', { b: mockResources });
  //   http.get = jasmine.createSpyObj(response).and.returnValue();

  //   expect(service.getResources()).toBeObservable(expected);
  //   expect(http.get).toHaveBeenCalledWith('/resources');
  // });

  it('should get resources', () => {
    const resources = newMockService.getResources();

    resources.subscribe((result) => {
      expect(result).toHaveSize(2);
      expect(result[0].id).withContext('expected id').toBe('test_id_1');
      expect(result[1].name).withContext('expected name').toBe('test_name_2');
      expect(result[0].category)
        .withContext('expected category')
        .toBe('workspace');
      expect(result[1].bounds)
        .withContext('expected bounds')
        .toEqual({ lat: 2, lng: 2 });
    });
  });

  it('should return expected resources (HttpClient called once)', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(mockResources));

    service.getResources().subscribe({
      next: (resources) => {
        expect(resources).toBeTruthy();
        expect(resources)
          .withContext('expected resources')
          .toEqual(mockResources);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
