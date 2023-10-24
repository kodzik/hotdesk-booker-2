import { Injectable } from '@angular/core';
import { Credentials } from './models/credentials';
import { Observable, map } from 'rxjs';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login({ username, password }: Credentials): Observable<Pick<User, 'id'>> {
    return this.http
      .post<Pick<User, 'id'>>('/users/authenticate', {
        username: username,
        password: password,
      })
      .pipe(map((res) => ({ id: res.id })));
  }
}
