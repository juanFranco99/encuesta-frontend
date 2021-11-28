import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GeneroMusicaListComponent} from "./genero-musica-list/genero-musica-list.component";

const routes: Routes = [
  {path:'', component: GeneroMusicaListComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class GeneroMusicaRoutingModule { }
