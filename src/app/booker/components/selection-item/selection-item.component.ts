import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromReservation } from '../../reducers';
import { DatePicker } from '../../_models/datepicker';
import { Subscription } from 'rxjs';
import { Resource } from '../../_models/resource';

@Component({
  selector: 'app-selection-item',
  templateUrl: './selection-item.component.html',
  styleUrls: ['./selection-item.component.scss'],
})
export class SelectionItemComponent implements OnInit, OnDestroy {
  datePicker: DatePicker;
  resourcePicker: Resource;

  date$: Subscription;
  resource$: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.date$ = this.store
      .select(fromReservation.selectDatePicker)
      .subscribe((date) => (this.datePicker = { ...date }));
    this.resource$ = this.store
      .select(fromReservation.selectResourcePicker)
      .subscribe((resource) => (this.resourcePicker = { ...resource }));
  }

  ngOnDestroy(): void {
    this.date$.unsubscribe();
    this.resource$.unsubscribe();
  }
}
