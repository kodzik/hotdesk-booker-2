import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import * as actions from '../../actions/resource-list.actions';
import * as fromResourceList from '../../reducers';
import { Resource } from 'src/app/_models/resource';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

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
export class ResourceListComponent implements OnInit {
  form: FormGroup;
  resourcePicker: FormControl;

  resources$: Observable<Resource[]>;
  // loading$: Observable<boolean>;

  resourcesAsMatTableDataSource$: Observable<MatTableDataSource<Resource>>;
  dataSource = new MatTableDataSource<Resource>();

  expandedElement: Resource | null;
  columnsToDisplay = ['name', 'available', 'reserved'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];

  constructor(private store: Store, private ctrlContainer: FormGroupDirective) {
    this.resources$ = this.store.select(fromResourceList.selectAllResources);
    // this.loading$ = this.store.select(fromResourceList.selectSearchLoading);

    this.store.dispatch(actions.queryResources());

    this.resourcesAsMatTableDataSource$ = this.resources$.pipe(
      map((resources) => {
        this.dataSource.data = resources;
        return this.dataSource;
      })
    );
    this.resourcePicker = new FormControl(null, Validators.required);
  }

  ngOnInit(): void {
    this.form = this.ctrlContainer.form;
    if (this.form) this.form.addControl('resourcePicker', this.resourcePicker);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clickedRow(row: Resource) {
    this.resourcePicker.patchValue({ ...row });
  }
}
