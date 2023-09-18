import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import * as actions from '../store/resource-list.actions';
import * as fromResourceList from '../store/resource-list.reducer';
import { Resource } from 'src/app/_models/resource';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
})
export class ResourceListComponent {
  resources$: Observable<Resource[]>;
  resources: Resource[];
  date: Date | undefined;

  constructor(private store: Store) {
    this.resources$ = this.store.select(fromResourceList.selectAll);
    this.store.dispatch(actions.queryResources());

    this.resources$.subscribe((resource) => {
      this.resources = [...resource];
    });
  }

  getSeverity(status: string) {
    return status ? 'success' : 'danger';
  }
}
