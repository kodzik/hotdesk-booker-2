import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookerComponent } from './booker.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookerComponent', () => {
  let component: BookerComponent;
  let fixture: ComponentFixture<BookerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BookerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
