import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EncuestaListComponent} from "./encuesta-list/encuesta-list.component";
import {ResponderEncuestaComponent} from "./responder-encuesta/responder-encuesta.component";

const routes: Routes = [
  {path: '', component: EncuestaListComponent},
  {path:'responder', component: ResponderEncuestaComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class EncuestaRoutingModule { }
