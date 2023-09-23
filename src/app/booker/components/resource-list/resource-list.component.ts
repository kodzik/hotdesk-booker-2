import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../actions/resource-list.actions';
import * as fromResourceList from '../../reducers/resource-list.reducer';
import { Resource } from 'src/app/_models/resource';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
})
export class ResourceListComponent {
  resources$: Observable<Resource[]>;

  constructor(private store: Store) {
    this.resources$ = this.store.select(fromResourceList.selectAll);
    this.store.dispatch(actions.queryResources());
  }
}
