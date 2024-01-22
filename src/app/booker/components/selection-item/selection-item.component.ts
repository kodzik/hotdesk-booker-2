import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectDatePicker,
  selectResourcePicker,
} from '../../selectors/reservation.selectors';
import { DatePicker } from '../../_models/datepicker';
import { Observable, map } from 'rxjs';
import { Resource } from '../../_models/resource';

@Component({
  selector: 'app-selection-item',
  templateUrl: './selection-item.component.html',
  styleUrls: ['./selection-item.component.scss'],
})
export class SelectionItemComponent implements OnInit {
  datePicker$: Observable<DatePicker>;
  resourcePicker$: Observable<Resource>;

  constructor(private store: Store) {}

  // #TODO Fix major problem: getting random 'category' when not present in object.
  ngOnInit(): void {
    this.datePicker$ = this.store
      .select(selectDatePicker)
      .pipe(map((datepicker) => datepicker));

    this.resourcePicker$ = this.store
      .select(selectResourcePicker)
      .pipe(map((resource) => resource));
  }
}
