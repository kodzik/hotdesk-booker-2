import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceListComponent } from './resource-list.component';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromApp from '../../../store/app.reducer';
import { TableModule } from 'primeng/table';
import { cold } from 'jasmine-marbles';

describe('ResourceListComponent', () => {
  let component: ResourceListComponent;
  let fixture: ComponentFixture<ResourceListComponent>;
  let store: MockStore;
  // const initialState = { ids: [] };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourceListComponent],
      imports: [TableModule], //StoreModule.forRoot(fromApp.appReducer),
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should return false if the user state is not logged in', () => {
  //   const expected = cold('(a|)', { ids: [] });
  //   console.log(component.resources$);

  //   expect(component.resources$).toBeObservable(expected);
  // });
});
