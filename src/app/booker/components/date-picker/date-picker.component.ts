import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  form: FormGroup;
  subForm: FormGroup;

  constructor(
    private ctrlContainer: FormGroupDirective,
    private fb: FormBuilder
  ) {
    this.subForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      startTime: ['08:00', Validators.required],
      endTime: ['16:00', Validators.required],
    });
  }

  ngOnInit(): void {
    this.form = this.ctrlContainer.form;
    this.form.addControl('datePicker', this.subForm);
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
