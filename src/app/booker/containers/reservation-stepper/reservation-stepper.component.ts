import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reservation-stepper',
  templateUrl: './reservation-stepper.component.html',
  styleUrls: ['./reservation-stepper.component.scss'],
})
export class ReservationStepperComponent {
  datePicker: FormGroup;
  viewModeMap: boolean = true;

  constructor(private _formBuilder: FormBuilder) {
    this.datePicker = this._formBuilder.group({});
  }

  get formControls() {
    return this.datePicker.controls;
  }

  toggleViewMode(event: boolean) {
    this.viewModeMap = event;
  }
}
