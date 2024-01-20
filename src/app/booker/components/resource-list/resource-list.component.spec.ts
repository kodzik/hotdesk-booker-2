import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceListComponent } from './resource-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from 'src/app/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

describe('ResourceListComponent', () => {
  let component: ResourceListComponent;
  let fixture: ComponentFixture<ResourceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourceListComponent],
      imports: [MaterialModule, NoopAnimationsModule, ReactiveFormsModule],
      providers: [provideMockStore(), FormGroupDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
