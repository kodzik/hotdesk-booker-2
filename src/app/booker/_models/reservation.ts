import { ReservationTimeSlot } from './reservationTimeSlot';

export class Reservation {
  constructor(
    public id: string,
    public userId: number,
    public resourceId: number,
    public timeSlot: ReservationTimeSlot
  ) {}
}
