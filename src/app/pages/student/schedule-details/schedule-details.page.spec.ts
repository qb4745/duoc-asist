import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ScheduleDetailsPage } from './schedule-details.page';

describe('ScheduleDetailsPage', () => {
  let component: ScheduleDetailsPage;
  let fixture: ComponentFixture<ScheduleDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScheduleDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
