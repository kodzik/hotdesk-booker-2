import { Reservation } from '../_models/reservation';
import { ReservationTimeSlot } from '../_models/reservationTimeSlot';
import {
  reservationFailure,
  reservationNew,
  reservationSuccess,
  updateForm,
} from '../actions/reservation-form.actions';
import { add } from '../actions/reservation.actions';
import {
  getPending,
  initialState,
  reservationFormReducer,
  reservationFormState,
} from './reservation-form.reducer';

describe('ReservationForm reducer', () => {
  describe('Reservation New', () => {
    it('should update status and state on creating new form', () => {
      const action = reservationNew();
      const expectedState: reservationFormState = {
        ...initialState,
        status: { inProgress: true, pending: false, error: null },
      };
      const isPending = getPending(expectedState);
      const reducedState = reservationFormReducer(initialState, action);

      expect(reducedState).toEqual(expectedState);
      expect(isPending).toEqual(false);
    });
  });
  describe('update Form', () => {
    it('should update state', () => {
      const datePicker = {
        startDate: new Date(),
        endDate: new Date(),
        startTime: '10:00',
        endTime: '16:00',
      };
      const action = updateForm({
        payload: { path: 'datePicker', value: datePicker },
      });
      const expectedState: reservationFormState = {
        ...initialState,
        datePicker: {
          startDate: new Date(),
          endDate: new Date(),
          startTime: '10:00',
          endTime: '16:00',
        },
      };
      const reducedState = reservationFormReducer(initialState, action);
      const isPending = getPending(expectedState);

      expect(expectedState).toEqual(reducedState);
      expect(isPending).toEqual(expectedState.status.pending);
    });
  });
  describe('Reservation Add', () => {
    it('should update status', () => {
      const newReservation: Omit<Reservation, 'id'> = {
        resourceId: 1,
        timeSlot: new ReservationTimeSlot(
          new Date(),
          new Date(),
          '08:00',
          '11:00'
        ),
        userId: 1,
      };
      const action = add({ payload: newReservation });
      const expectedState: reservationFormState = {
        ...initialState,
        status: {
          pending: true,
          error: null,
          inProgress: true,
        },
      };
      const reducedState = reservationFormReducer(initialState, action);
      const isPending = getPending(expectedState);

      expect(reducedState).toEqual(expectedState);
      expect(isPending).toEqual(expectedState.status.pending);
    });
  });
  describe('reservationSuccess', () => {
    it('should return state to initial state', () => {
      const newReservation: Reservation = {
        id: '1',
        resourceId: 1,
        timeSlot: new ReservationTimeSlot(
          new Date(),
          new Date(),
          '08:00',
          '11:00'
        ),
        userId: 1,
      };
      const action = reservationSuccess({ payload: newReservation });
      const reducedState = reservationFormReducer(initialState, action);
      const isPending = getPending(initialState);

      expect(reducedState).toEqual(initialState);
      expect(isPending).toEqual(initialState.status.pending);
    });
  });
  describe('reservationFailure', () => {
    it('should update status error on failure', () => {
      const action = reservationFailure({
        payload: { error: 'Error message' },
      });
      const expectedState: reservationFormState = {
        ...initialState,
        status: {
          pending: false,
          inProgress: false,
          error: 'Error message',
        },
      };
      const reducedState = reservationFormReducer(initialState, action);
      const isPending = getPending(initialState);

      expect(isPending).toEqual(expectedState.status.pending);
      expect(reducedState).toEqual(expectedState);
    });
  });
});
