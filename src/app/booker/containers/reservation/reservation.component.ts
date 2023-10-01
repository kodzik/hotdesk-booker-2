import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent {
  datePicker: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.datePicker = this._formBuilder.group({});
  }
}
