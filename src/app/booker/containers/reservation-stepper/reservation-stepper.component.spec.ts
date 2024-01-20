import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationStepperComponent } from './reservation-stepper.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from 'src/app/material';
import { ReservationComponent } from '../reservation/reservation.component';
import { DatePickerComponent } from '../../components/date-picker/date-picker.component';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { SelectionsComponent } from '../../components/selections/selections.component';
import { SelectionItemComponent } from '../../components/selection-item/selection-item.component';
import { ResourceListComponent } from '../../components/resource-list/resource-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ReservationStepperComponent', () => {
  let component: ReservationStepperComponent;
  let fixture: ComponentFixture<ReservationStepperComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule, NoopAnimationsModule],
      declarations: [
        ReservationStepperComponent,
        ReservationComponent,
        ResourceListComponent,
        DatePickerComponent,
        SelectionsComponent,
        SelectionItemComponent,
      ],
      providers: [provideMockStore(), FormGroupDirective],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ReservationStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
