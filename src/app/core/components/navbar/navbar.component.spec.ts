import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatMenuHarness } from '@angular/material/menu/testing';

import { NavbarComponent } from './navbar.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from 'src/app/material';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { navigationActions } from '../../actions';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, NoopAnimationsModule],
      declarations: [NavbarComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch reserveResource action', () => {
    component.gotoMyReservations();
    expect(store.dispatch).toHaveBeenCalledWith(
      navigationActions.gotoMyReservations()
    );
  });

  xit('should not display elements which needs permissions', async () => {
    // #TODO fix: use proper harness or fix ngIf
    let loader: HarnessLoader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
    let menu = await loader.getHarness(MatMenuHarness);
    let items = await menu.getItems();
    expect(items.length).toBe(1);
  });

  xit('should run gotoMyReservations on click', fakeAsync(() => {
    // #TODO fix: unable to find button by css
    fixture.detectChanges();
    let button = fixture.debugElement.query(By.css('#redirectMyReservations'));
    spyOn(component, 'gotoMyReservations'); //method attached to the click.
    button.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(component.gotoMyReservations).toHaveBeenCalled();
  }));
});
