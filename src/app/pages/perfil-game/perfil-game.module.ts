import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilGamePage } from './perfil-game.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilGamePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilGamePage]
})
<<<<<<< HEAD
export class PerfilGamePageModule {}
=======
export class PerfilGamePageModule { }
>>>>>>> 7ab34fae268103f5db7a6b4824bac95098af186c