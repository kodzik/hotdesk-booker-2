import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { DatePicker } from '../../_models/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  form: FormGroup;
  datePicker: FormGroup;

  constructor(
    private ctrlContainer: FormGroupDirective,
    private fb: FormBuilder
  ) {
    this.datePicker = this.fb.group<DatePicker>({
      startDate: null,
      endDate: null,
      startTime: '',
      endTime: '',
    });
  }

  ngOnInit(): void {
    this.form = this.ctrlContainer.form;
    this.form.addControl('datePicker', this.datePicker);
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    // return day !== 0 && day !== 6;
    return true;
  };
}
