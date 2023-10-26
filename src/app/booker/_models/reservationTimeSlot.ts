export class ReservationTimeSlot {
  constructor(
    public startDate: Date,
    public endDate: Date,
    public startTime?: string,
    public endTime?: string
  ) {
    if (startTime !== null && endTime !== null)
      this.updateTime(startTime, endTime);
  }

  updateTime(startTime: string, endTime: string) {
    const [startHours, startMinutes] = startTime.split(':');
    const [endHours, endMinutes] = endTime.split(':');

    this.startDate.setHours(Number(startHours));
    this.startDate.setMinutes(Number(startMinutes));
    this.endDate.setHours(Number(endHours));
    this.endDate.setMinutes(Number(endMinutes));
  }
}
