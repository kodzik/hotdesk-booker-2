import { Reservation } from '../_models/reservation';
import { ReservationTimeSlot } from '../_models/reservationTimeSlot';
import { ReservationApiActions, ReservationFormActions } from '../actions';
import {
  State,
  getReservations,
  initialState,
  reservationCollectionReducer,
} from './reservation-collection.reducer';

describe('ReservationCollectionReducer', () => {
  const datePicker = {
    startDate: new Date(),
    endDate: new Date(),
    startTime: '00:00',
    endTime: '16:00',
  };
  const reservation: Reservation = {
    id: 'test_id',
    userId: 1,
    resourceId: 1,
    timeSlot: new ReservationTimeSlot(
      datePicker.startDate,
      datePicker.endDate,
      datePicker.startTime,
      datePicker.endTime
    ),
  };

  describe('reservationSuccess action', () => {
    it('should add reservation to store', () => {
      const action = ReservationFormActions.reservationSuccess({
        payload: reservation,
      });
      const resourceCollectionState: State = {
        ids: ['test_id'],
        entities: {
          test_id: reservation,
        },
      };
      const getReservationsResult = getReservations(resourceCollectionState);
      const newState = reservationCollectionReducer(initialState, action);

      expect(newState).toEqual(resourceCollectionState);
      expect(newState).not.toBe(initialState);
      expect(getReservationsResult).toBe(resourceCollectionState.entities);
    });
  });
  describe('removeSuccess action', () => {
    it('should remove reservation from store', () => {
      const action = ReservationApiActions.removeSuccess({
        id: reservation.id,
      });
      const resourceCollectionState: State = {
        ids: [],
        entities: {},
      };
      const getReservationsResult = getReservations(resourceCollectionState);
      const newState = reservationCollectionReducer(initialState, action);

      expect(newState).toEqual(resourceCollectionState);
      expect(newState).toEqual(initialState);
      expect(getReservationsResult).toBe(resourceCollectionState.entities);
    });
  });
});
