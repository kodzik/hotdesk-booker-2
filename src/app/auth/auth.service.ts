import { Injectable } from '@angular/core';
import { Credentials } from './models/credentials';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login({ username, password }: Credentials): Observable<any> {
    return this.http
      .post<User>('/users/authenticate', {
        username: username,
        password: password,
      })
      .pipe(map((res) => of({ username: res.username })));
  }

  logout() {
    return of(true);
  }
}
