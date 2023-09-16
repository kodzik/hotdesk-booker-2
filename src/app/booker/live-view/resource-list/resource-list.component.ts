import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../store/resource-list.actions';
import * as fromResourceList from '../store/resource-list.reducer';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
})
export class ResourceListComponent {
  resources$: Observable<any>;

  constructor(private store: Store) {
    this.resources$ = this.store.select(fromResourceList.selectAll);
    this.store.dispatch(actions.queryResources());
  }
}
