import { createReducer, on } from '@ngrx/store';
import * as reservationActions from '../actions/reservation.actions';
import { DatePicker } from '../_models/datepicker';
import { Resource } from 'src/app/_models/resource';

export const reservationFormFeatureKey = 'reservationForm';

export interface reservationFormState {
  datePicker: DatePicker;
  resourcePicker: Resource;
  status: {
    inProgress: boolean;
    pending: boolean;
    error: string | null;
  };
}

export const initialState: reservationFormState = {
  datePicker: {
    startDate: new Date(),
    endDate: new Date(),
    startTime: '08:00',
    endTime: '16:00',
  },
  resourcePicker: null,
  status: {
    inProgress: false,
    pending: false,
    error: null,
  },
};

export const reservationFormReducer = createReducer(
  initialState,
  on(reservationActions.reservationNew, (state) => {
    return {
      ...state,
      status: { inProgress: true, pending: false, error: null },
    };
  }),
  on(reservationActions.updateForm, (state, action) => {
    return {
      ...state,
      [action.payload.path]: action.payload.value,
    };
  }),
  on(reservationActions.reservationAdd, (state) => {
    return {
      ...state,
      status: {
        pending: true,
        error: null,
        inProgress: true,
      },
    };
  }),
  on(reservationActions.reservationSuccess, () => ({ ...initialState })),
  on(reservationActions.reservationFailure, (state, action) => {
    return {
      ...state,
      status: {
        pending: false,
        inProgress: false,
        error: action.payload.error,
      },
    };
  })
);

export const getPending = (state: reservationFormState) => state.status.pending;
