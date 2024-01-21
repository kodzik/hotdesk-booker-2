import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { navigationActions } from '../../actions';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let store: MockStore;
  let storeSpy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    storeSpy = spyOn(store, 'dispatch').and.callFake(() => {});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect on timeout', () => {
    jasmine.clock().install();
    expect(component.counter).toBe(5);
    component.redirect();

    jasmine.clock().tick(5000);
    fixture.detectChanges();

    expect(storeSpy).toHaveBeenCalledWith(
      navigationActions.pageNotFoundRedirect()
    );
    jasmine.clock().uninstall();
  });
});
