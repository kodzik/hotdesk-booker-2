import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import * as test_resources from './fake-backend-resources';
import { users } from './fake-backend-resources';
import { Reservation } from '../booker/_models/reservation';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../auth/models/user';

// array in local storage for registered users
const usersKey = 'users';

// TODO fix to load users to localstore on init
// let users: any[] = JSON.parse(localStorage.getItem(usersKey)!) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return handleRoute();

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/users/register') && method === 'POST':
          return register();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        case url.match(/\/users\/\d+$/) && method === 'GET':
          return getUserById();
        case url.match(/\/users\/\d+$/) && method === 'PUT':
          return updateUser();
        case url.endsWith('/resources') && method === 'GET':
          return getResources();
        case url.endsWith('/reservations') && method === 'GET':
          return getReservations();
        case url.endsWith('/reservations') && method === 'POST':
          return newReservation(body);
        case url.endsWith('/reservations') && method === 'DELETE':
          return deleteReservation();
        // case url.match(/\/users\/\d+$/) && method === 'DELETE':
        //   return deleteUser();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions
    function getResources() {
      return ok(test_resources.resources);
      // #TODO add error handling
    }

    function getReservations() {
      const reservations = JSON.parse(localStorage.getItem('reservation'));
      return reservations
        ? ok(Object.values(reservations.reservations.entities))
        : error('No reservations found.');
    }

    function deleteReservation() {
      let reservations = JSON.parse(localStorage.getItem('reservation'));
      let reservationsObj: any = Object.values(
        reservations.reservations.entities
      );

      reservationsObj = reservationsObj.filter((x) => x.id !== body);
      return ok();
    }

    function newReservation(body: Omit<Reservation, 'id'>) {
      const newReservation = new Reservation(
        uuidv4(),
        body.userId,
        body.resourceId,
        body.timeSlot
      );
      return newReservation
        ? ok(newReservation)
        : error('Error while creating reservation.');
    }

    function authenticate() {
      const { username, password } = body;
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (!user) return error('Username or password is incorrect');
      return ok({
        ...basicDetails(user),
        token: 'fake-jwt-token',
      });
    }

    function register() {
      const user = body;

      if (users.find((x) => x.username === user.username)) {
        return error('Username "' + user.username + '" is already taken');
      }

      user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem(usersKey, JSON.stringify(users));
      return ok();
    }

    function getUsers() {
      if (!isLoggedIn()) return unauthorized();
      return ok(users.map((x) => basicDetails(x)));
    }

    function getUserById() {
      if (!isLoggedIn()) return unauthorized();

      const user = users.find((x) => x.id === idFromUrl());
      return ok(basicDetails(user));
    }

    function updateUser() {
      if (!isLoggedIn()) return unauthorized();

      let params = body;
      let user = users.find((x) => x.id === idFromUrl());

      // only update password if entered
      if (!params.password) {
        delete params.password;
      }

      // update and save user
      Object.assign(user, params);
      localStorage.setItem(usersKey, JSON.stringify(users));

      return ok();
    }

    // TODO fix USER type
    // function deleteUser() {
    //   if (!isLoggedIn()) return unauthorized();

    //   users = users.filter((x) => x.id !== idFromUrl());
    //   localStorage.setItem(usersKey, JSON.stringify(users));
    //   return ok();
    // }

    // helper functions

    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body })).pipe(delay(500)); // delay observable to simulate server api call
    }

    function error(message: string) {
      return throwError(() => ({ error: { message } })).pipe(
        materialize(),
        delay(500),
        dematerialize()
      ); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
    }

    function unauthorized() {
      return throwError(() => ({
        status: 401,
        error: { message: 'Unauthorized' },
      })).pipe(materialize(), delay(500), dematerialize());
    }

    function basicDetails(user: User) {
      const { id, username } = user;
      return { id, username };
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
