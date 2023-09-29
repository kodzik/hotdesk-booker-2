import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import * as actions from '../../actions/resource-list.actions';
import * as fromResourceList from '../../reducers/resource-list.reducer';
import { Resource } from 'src/app/_models/resource';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ResourceListComponent {
  resources$: Observable<Resource[]>;

  thingsAsMatTableDataSource$: Observable<MatTableDataSource<Resource>>;
  dataSource = new MatTableDataSource<Resource>();

  expandedElement: Resource | null;
  columnsToDisplay = ['name', 'available', 'reserved'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];

  constructor(private store: Store) {
    this.resources$ = this.store.select(fromResourceList.selectAll);
    this.store.dispatch(actions.queryResources());

    this.thingsAsMatTableDataSource$ = this.resources$.pipe(
      map((things) => {
        this.dataSource.data = things;
        return this.dataSource;
      })
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
