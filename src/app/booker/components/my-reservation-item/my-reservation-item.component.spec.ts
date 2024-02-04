import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { MyReservationItemComponent } from './my-reservation-item.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from 'src/app/material';
import { ReservationTimeSlot } from '../../_models/reservationTimeSlot';
import { By } from '@angular/platform-browser';
import { ReservationActions } from '../../actions';

describe('MyReservationItemComponent', () => {
  let component: MyReservationItemComponent;
  let fixture: ComponentFixture<MyReservationItemComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [MyReservationItemComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(MyReservationItemComponent);
    component = fixture.componentInstance;
    component.item = {
      id: 'some_id',
      resourceId: 1,
      timeSlot: new ReservationTimeSlot(new Date(), new Date(), null, null),
      userId: 1,
    };
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run deleteReservation on click', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(component, 'deleteReservation'); //method attached to the click.
    let btn = fixture.debugElement.query(By.css('#deleteBtn'));
    btn.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(component.deleteReservation).toHaveBeenCalled();
  }));

  it('should delete reservation on click', () => {
    component.deleteReservation();
    expect(store.dispatch).toHaveBeenCalledWith(
      ReservationActions.remove({ id: 'some_id' })
    );
  });
});
