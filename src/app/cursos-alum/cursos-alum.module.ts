import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosAlumPageRoutingModule } from './cursos-alum-routing.module';

import { CursosAlumPage } from './cursos-alum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosAlumPageRoutingModule
  ],
  declarations: [CursosAlumPage]
})
export class CursosAlumPageModule {}
