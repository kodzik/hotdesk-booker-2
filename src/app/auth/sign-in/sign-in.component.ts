import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Credentials } from '../models/credentials';
import { SignInPageActions } from '../actions/';
import { AuthSelectors } from '../selectors';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  //TODO fix view errors
  submitted = false;

  error$: Observable<any>;
  pending$: Observable<boolean>;

  form: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private formBuilder: UntypedFormBuilder, private store: Store) {
    this.form = this.formBuilder.group({
      username: ['test', [Validators.required]],
      password: ['test', Validators.required],
    });
  }

  ngOnInit(): void {
    this.error$ = this.store
      .select(AuthSelectors.selectSignInPageError)
      .pipe(map((error) => (error ? error.error.message : error)));

    this.pending$ = this.store.select(AuthSelectors.selectSignInPagePending);
  }

  get formControls() {
    return this.form.controls;
  }

  onSubmit(credentials: Credentials) {
    this.store.dispatch(SignInPageActions.signIn({ credentials }));
  }
}
