import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosProfPage } from './cursos-prof.page';

const routes: Routes = [
  {
    path: '',
    component: CursosProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosProfPageRoutingModule {}
