import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeneroMusicaRoutingModule} from "./genero-musica.routing.module";
import {GeneroMusicaService} from "./genero-musica.service";
import {FormsModule} from "@angular/forms";
import { GeneroMusicaListComponent } from './genero-musica-list/genero-musica-list.component';
import {CardModule} from "primeng/card";
import {DxDataGridModule} from "devextreme-angular";
import {ServiceModule} from "../../services/service.module";
import { GeneroMusicaEditComponent } from './genero-musica-edit/genero-musica-edit.component';
import {DialogService} from "primeng/dynamicdialog";
import {DialogModule} from "primeng/dialog";
import { InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {AvisoService} from "../../services/aviso.service";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";



@NgModule({
  declarations: [
    GeneroMusicaListComponent,
    GeneroMusicaEditComponent
  ],
  imports: [
    CommonModule,
    GeneroMusicaRoutingModule,
    FormsModule,
    CardModule,
    DxDataGridModule,
    ServiceModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    ToastModule
  ],
  providers:[
    GeneroMusicaService,
    DialogService,
    AvisoService
  ]
})
export class GeneroMusicaModule { }
