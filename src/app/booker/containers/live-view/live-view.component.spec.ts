import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveViewComponent } from './live-view.component';
import { ResourceListComponent } from '../../components/resource-list/resource-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import { MaterialModule } from 'src/app/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LiveViewComponent', () => {
  let component: LiveViewComponent;
  let fixture: ComponentFixture<LiveViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(fromApp.appReducer),
        MaterialModule,
        NoopAnimationsModule,
      ],
      declarations: [LiveViewComponent, ResourceListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});