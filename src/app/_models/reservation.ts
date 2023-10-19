import { User } from './user';

export class Reservation {
  constructor(
    public id: string,
    public user: User,
    public resourceId: number,
    public timeSlot: {
      start: Date;
      end: Date;
    }
  ) {}
}
