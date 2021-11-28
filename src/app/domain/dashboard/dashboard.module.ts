import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from "./dashboard.routing.module";
import {DashboardComponent} from "./dashboard.component";
import {EncuestaService} from "../encuesta/encuesta.service";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {DxPieChartModule} from "devextreme-angular";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    RouterModule,
    DxPieChartModule
  ],
  providers:[
    EncuestaService
  ]
})
export class DashboardModule { }
