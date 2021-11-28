import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'genero',
    loadChildren: ()=> import('./domain/genero-musica/genero-musica.module').then(g => g.GeneroMusicaModule)
  },
  {
    path: 'encuesta',
    loadChildren: ()=> import('./domain/encuesta/encuesta.module').then(g => g.EncuestaModule)
  },
  {
    path: 'dashboard',
    loadChildren: ()=> import('./domain/dashboard/dashboard.module').then(g => g.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
