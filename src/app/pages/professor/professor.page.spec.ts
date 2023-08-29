import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessorPage } from './professor.page';

describe('ProfessorPage', () => {
  let component: ProfessorPage;
  let fixture: ComponentFixture<ProfessorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
