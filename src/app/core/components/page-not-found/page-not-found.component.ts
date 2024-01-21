import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { navigationActions } from '../../actions';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  counter = 5;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.redirect();
  }

  redirect() {
    setInterval(() => {
      this.counter -= 1;
      if (this.counter === 0)
        this.store.dispatch(navigationActions.pageNotFoundRedirect());
    }, 1000);
  }
}
