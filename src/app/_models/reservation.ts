export class Reservation {
  constructor(
    public id: string,
    public userId: number,
    public resourceId: number,
    public timeSlot: {
      start: Date;
      end: Date;
    }
  ) {}
}
