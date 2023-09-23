import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResourceListService } from './resource-list.service';
import { Resource } from 'src/app/_models/resource';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { GeoPoint } from '@angular/fire/firestore';

describe('ResourceListService', () => {
  let service: ResourceListService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  const mockResources: Resource[] = [
    {
      id: 'test_id_1',
      name: 'test_name_1',
      category: 'workspace',
      available: false,
      reserved: false,
      bounds: new GeoPoint(11, 22),
    },
    {
      id: 'test_id_2',
      name: 'test_name_2',
      category: 'workspace',
      available: false,
      reserved: false,
      bounds: new GeoPoint(33, 44),
    },
  ];

  const newMockService = jasmine.createSpyObj<ResourceListService>({
    getResources: of(mockResources),
  });

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ResourceListService(httpClientSpy);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ResourceListService, useValue: newMockService }],
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

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
        .toEqual(new GeoPoint(33, 44));
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
