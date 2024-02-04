import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { LiveViewComponent } from './live-view.component';
import { ResourceListComponent } from '../../components/resource-list/resource-list.component';
import { MaterialModule } from 'src/app/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ReservationFormActions } from '../../actions';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

describe('LiveViewComponent', () => {
  let component: LiveViewComponent;
  let fixture: ComponentFixture<LiveViewComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, NoopAnimationsModule, ReactiveFormsModule],
      declarations: [LiveViewComponent, ResourceListComponent],
      providers: [provideMockStore(), FormGroupDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callFake(() => {});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run reserveResource on click', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(component, 'reserveResource'); //method attached to the click.
    let btn = fixture.debugElement.query(By.css('#reserveResourceBtn'));
    btn.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(component.reserveResource).toHaveBeenCalled();
  }));

  it('should dispatch reserveResource action', () => {
    component.reserveResource();
    expect(store.dispatch).toHaveBeenCalledWith(
      ReservationFormActions.reservationNew()
    );
  });
});
