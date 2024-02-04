import { DatePicker } from './datepicker';

export class Reservation {
  constructor(
    public id: string,
    public userId: number,
    public resourceId: number,
    public timeSlot: Pick<DatePicker, 'startDate' | 'endDate'>
  ) {}
}
