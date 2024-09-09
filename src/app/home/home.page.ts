import { Component,  OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private activeroute: ActivatedRoute, private router: Router) {}

  navegar(){
    this.router.navigate(['/cursos-prof']);
    this.activeroute.queryParams.subscribe(() => {



      console.log( this.router.getCurrentNavigation()?.extras.state?.['nombre']);

      console.log(this.router.getCurrentNavigation()?.extras.state?.['id']);



    });
  }


}
