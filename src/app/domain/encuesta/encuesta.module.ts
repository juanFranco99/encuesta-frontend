import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaListComponent } from './encuesta-list/encuesta-list.component';
import {EncuestaRoutingModule} from "./encuesta.routing.module";
import {EncuestaService} from "./encuesta.service";
import {AvisoService} from "../../services/aviso.service";
import {DxDataGridModule} from "devextreme-angular";
import {ToastModule} from "primeng/toast";
import {CardModule} from "primeng/card";
import {DialogModule} from "primeng/dialog";
import {MessagesModule} from "primeng/messages";
import {ServiceModule} from "../../services/service.module";
import {DialogService} from "primeng/dynamicdialog";
import { ResponderEncuestaComponent } from './responder-encuesta/responder-encuesta.component';
import {GeneroMusicaService} from "../genero-musica/genero-musica.service";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";



@NgModule({
  declarations: [
    EncuestaListComponent,
    ResponderEncuestaComponent
  ],
  imports: [
    CommonModule,
    EncuestaRoutingModule,
    DxDataGridModule,
    ToastModule,
    CardModule,
    DialogModule,
    MessagesModule,
    ServiceModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    RadioButtonModule
  ],
  providers:[
    EncuestaService,
    AvisoService,
    DialogService,
    GeneroMusicaService
  ]
})
export class EncuestaModule { }
