import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosAlumPage } from './cursos-alum.page';

describe('CursosAlumPage', () => {
  let component: CursosAlumPage;
  let fixture: ComponentFixture<CursosAlumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosAlumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
