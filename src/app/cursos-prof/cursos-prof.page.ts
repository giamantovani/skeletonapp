import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-cursos-prof',
  templateUrl: './cursos-prof.page.html',
  styleUrls: ['./cursos-prof.page.scss'],
})
export class CursosProfPage  {

  constructor(private router: Router) { }

  navegar(){
    this.router.navigate(['/home']);
  }

}
