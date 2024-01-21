import { Reservation } from '../_models/reservation';
import { ReservationTimeSlot } from '../_models/reservationTimeSlot';
import { Resource } from '../_models/resource';
import { State } from '../reducers/reservation-collection.reducer';
import { ReservationState } from '../reducers/reservation.reducers';
import {
  selectDatePicker,
  selectReservationCollection,
  selectReservationForm,
  selectResourcePicker,
} from './reservation.selectors';

describe('Booker selectors', () => {
  const datePicker = {
    startDate: new Date(),
    endDate: new Date(),
    startTime: '00:00',
    endTime: '16:00',
  };
  const resource: Resource = {
    id: 1,
    name: '1L',
    available: true,
    reserved: false,
    category: 'workspace',
    bounds: { lat: 1, lng: 1 },
  };
  const reservation: Reservation = {
    id: '1',
    userId: 1,
    resourceId: 1,
    timeSlot: new ReservationTimeSlot(
      datePicker.startDate,
      datePicker.endDate,
      datePicker.startTime,
      datePicker.endTime
    ),
  };
  const resourceCollectionState: State = {
    ids: [1],
    entities: {
      1: reservation,
    },
  };

  const mockedReservationState: ReservationState = {
    reservationForm: {
      datePicker: datePicker,
      resourcePicker: resource,
      status: { error: null, inProgress: false, pending: false },
    },
    reservations: resourceCollectionState,
  };
  describe('selectReservationForm', () => {
    it('should return reservation form', () => {
      const result = selectReservationForm.projector(mockedReservationState);
      expect(result).toBe(mockedReservationState.reservationForm);
    });
  });
  describe('selectDatePicker', () => {
    it('should return datePicker', () => {
      const result = selectDatePicker.projector(
        mockedReservationState.reservationForm
      );
      expect(result).toBe(mockedReservationState.reservationForm.datePicker);
    });
  });
  describe('selectResourcePicker', () => {
    it('should return resourcePicker', () => {
      const result = selectResourcePicker.projector(
        mockedReservationState.reservationForm
      );
      expect(result).toBe(
        mockedReservationState.reservationForm.resourcePicker
      );
    });
  });
  describe('selectReservationCollection', () => {
    it('should return reservations', () => {
      const result = selectReservationCollection.projector(
        mockedReservationState
      );
      expect(result).toBe(mockedReservationState.reservations);
    });
  });
});
