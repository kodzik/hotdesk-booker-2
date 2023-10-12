import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromReservation from '../../reducers';
import { DatePicker } from '../../_models/datepicker';
import { Resource } from 'src/app/_models/resource';

@Component({
  selector: 'app-selection-item',
  templateUrl: './selection-item.component.html',
  styleUrls: ['./selection-item.component.scss'],
})
export class SelectionItemComponent {
  datePicker: DatePicker;
  resource: any;

  constructor(private store: Store) {
    this.store
      .select(fromReservation.selectDatePicker)
      .subscribe((date) => (this.datePicker = { ...date }));
    this.store
      .select(fromReservation.selectResourcePicker)
      .subscribe((resource) => {
        console.log(resource);
        return (this.resource = { ...resource });
      });
  }
}
