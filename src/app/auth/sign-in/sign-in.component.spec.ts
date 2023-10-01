import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from 'src/app/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SignInPageActions } from '../actions/';
import { Credentials } from '../models/credentials';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
      ],
      declarations: [SignInComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(store, 'dispatch').and.callFake(() => {});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get form controls', () => {
    expect(component['f']).toBeTruthy();
  });

  it('signIn should dispatch signIn action', () => {
    const credentials: Credentials = {
      username: 'test',
      password: 'test',
    };
    component.onSubmit(credentials);
    expect(store.dispatch).toHaveBeenCalledWith(
      SignInPageActions.signIn({ credentials })
    );
  });
});
