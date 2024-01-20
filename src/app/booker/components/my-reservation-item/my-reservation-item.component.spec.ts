import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReservationItemComponent } from './my-reservation-item.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from 'src/app/material';

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
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
