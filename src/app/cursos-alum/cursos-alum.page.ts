import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-cursos-alum',
  templateUrl: './cursos-alum.page.html',
  styleUrls: ['./cursos-alum.page.scss'],
})
export class CursosAlumPage {

  constructor(private router: Router) { }

  navegar(){
    this.router.navigate(['/perfil-alumno']);
  }

}
