import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Credentials } from './models/credentials';
import { User } from '../_models/user';

describe('AuthService', () => {
  let service: AuthService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('should return user on provided credentials', () => {
      const userMock: User = {
        username: 'test',
      };

      const credentials: Credentials = {
        username: 'test',
        password: 'test',
      };

      service.login(credentials).subscribe((res) => {
        expect(res).toEqual(jasmine.objectContaining(userMock));
      });

      const req = httpController.expectOne({
        method: 'POST',
        url: '/users/authenticate',
      });

      req.flush(userMock);
    });
  });
});
