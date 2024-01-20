import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionItemComponent } from './selection-item.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from 'src/app/material';

describe('SelectionItemComponent', () => {
  let component: SelectionItemComponent;
  let fixture: ComponentFixture<SelectionItemComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [SelectionItemComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(SelectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
