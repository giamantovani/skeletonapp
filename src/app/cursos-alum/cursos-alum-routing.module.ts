import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosAlumPage } from './cursos-alum.page';

const routes: Routes = [
  {
    path: '',
    component: CursosAlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosAlumPageRoutingModule {}
