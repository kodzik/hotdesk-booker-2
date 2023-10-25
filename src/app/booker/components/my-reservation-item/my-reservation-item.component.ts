import { Component, Input } from '@angular/core';
import { Reservation } from 'src/app/_models/reservation';

@Component({
  selector: 'app-my-reservation-item',
  templateUrl: './my-reservation-item.component.html',
  styleUrls: ['./my-reservation-item.component.scss'],
})
export class MyReservationItemComponent {
  @Input() item: Reservation;
}
