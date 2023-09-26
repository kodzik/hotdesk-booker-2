import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Credentials } from '../models/credentials';
import { SignInPageActions } from '../actions/';
import * as fromAuth from '../reducers';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  //TODO fix
  submitted = false;

  error$: Observable<any>;
  pending$: Observable<boolean>;

  form: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private formBuilder: UntypedFormBuilder, private store: Store) {
    this.error$ = this.store
      .select(fromAuth.selectSignInPageError)
      .pipe(map((error) => (error ? error.error.message : error)));

    this.pending$ = this.store.select(fromAuth.selectSignInPagePending);

    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(credentials: Credentials) {
    this.store.dispatch(SignInPageActions.signIn({ credentials }));
  }
}
