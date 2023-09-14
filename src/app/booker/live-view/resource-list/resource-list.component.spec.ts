import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskListComponent } from './resource-list.component';

describe('DeskListComponent', () => {
  let component: DeskListComponent;
  let fixture: ComponentFixture<DeskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeskListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
