import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, of, tap } from 'rxjs';
import { selectAuthStatusUser } from 'src/app/auth/selectors/auth.selectors';
import { navigationActions } from '../../actions';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary">
      <a [routerLink]="['/booker/live']">
        <img id="logo" src="assets/logo.svg" />
      </a>
      <span class="spacer"></span>
      <button
        *ngIf="isLoggedIn$ | async"
        mat-icon-button
        [matMenuTriggerFor]="menu"
      >
        <mat-icon>face</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <p>Hi {{ userName$ | async }}!</p>
        <mat-divider></mat-divider>

        <button mat-menu-item (click)="gotoMyReservations()">
          <span>My reservations</span>
        </button>
        <button mat-menu-item disabled>
          <span>Logout</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  userName$: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(selectAuthStatusUser).pipe(
      tap((user) => {
        if (user) this.userName$ = of(user.username);
      }),
      map((user) => (user ? true : false))
    );
  }

  gotoMyReservations() {
    this.store.dispatch(navigationActions.gotoMyReservations());
  }
}
