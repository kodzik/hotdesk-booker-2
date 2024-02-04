import { Action } from '@ngrx/store';
import { ReservationState, reservationReducers } from './reservation.reducers';
import { State } from './reservation-collection.reducer';
import { Reservation } from '../_models/reservation';
import { ReservationTimeSlot } from '../_models/reservationTimeSlot';
import { Resource } from '../_models/resource';

describe('Combine authReducers', () => {
  it('should return combined auth reducers', () => {
    const action: Action = { type: 'unknown' };
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

    const expectedCombinedReducers: ReservationState = {
      reservationForm: {
        datePicker: datePicker,
        resourcePicker: resource,
        status: { error: null, inProgress: false, pending: false },
      },
      reservations: resourceCollectionState,
    };

    const combineReducers = reservationReducers(
      expectedCombinedReducers,
      action
    );

    expect(combineReducers).toEqual(expectedCombinedReducers);
  });
});
