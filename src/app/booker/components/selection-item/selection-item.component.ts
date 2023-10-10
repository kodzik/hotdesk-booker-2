import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromReservation from '../../reducers';
import { DatePicker } from '../../_models/datepicker';

@Component({
  selector: 'app-selection-item',
  templateUrl: './selection-item.component.html',
  styleUrls: ['./selection-item.component.scss'],
})
export class SelectionItemComponent {
  datePicker: DatePicker;

  constructor(private store: Store) {
    this.store
      .select(fromReservation.selectDatePicker)
      .subscribe((date) => (this.datePicker = { ...date }));
  }
}
