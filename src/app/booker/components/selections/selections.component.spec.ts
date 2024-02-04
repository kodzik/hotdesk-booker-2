import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionsComponent } from './selections.component';
import { MaterialModule } from 'src/app/material';
import { SelectionItemComponent } from '../selection-item/selection-item.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('SelectionsComponent', () => {
  let component: SelectionsComponent;
  let fixture: ComponentFixture<SelectionsComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [SelectionsComponent, SelectionItemComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(SelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
