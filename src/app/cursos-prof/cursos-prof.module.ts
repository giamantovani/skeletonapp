import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosProfPageRoutingModule } from './cursos-prof-routing.module';

import { CursosProfPage } from './cursos-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosProfPageRoutingModule
  ],
  declarations: [CursosProfPage]
})
export class CursosProfPageModule {}
