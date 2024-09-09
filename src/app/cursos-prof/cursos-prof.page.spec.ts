import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosProfPage } from './cursos-prof.page';

describe('CursosProfPage', () => {
  let component: CursosProfPage;
  let fixture: ComponentFixture<CursosProfPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
