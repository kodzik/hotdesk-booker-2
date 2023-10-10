import { createReducer, on } from '@ngrx/store';
import * as reservationActions from '../actions/reservation.actions';
import { DatePicker } from '../_models/datepicker';

export const reservationFeatureKey = 'reservation';

export interface State {
  datePicker: DatePicker;
}

export const initialState: State = {
  datePicker: {
    startDate: new Date(),
    endDate: new Date(),
    startTime: '08:00',
    endTime: '16:00',
  },
};

export const reservationReducer = createReducer(
  initialState,
  on(reservationActions.updateForm, (state, action) => {
    return { ...state, [action.payload.path]: action.payload.value };
  })
);
