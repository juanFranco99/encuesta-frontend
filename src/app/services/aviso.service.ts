import { Injectable, Output } from '@angular/core';
import {  MessageService } from 'primeng/api';

export enum TipoAviso {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warn',
  ERROR = 'error'
}

export class Aviso {
  summary: string;
  detail: string;
}

@Injectable({
  providedIn: 'root'
})
export class AvisoService {

  constructor(
    private messageService: MessageService
  ) { }

  showInfo(msg: Aviso){
    this.messageService.add({severity: TipoAviso.INFO, summary: msg.summary, detail: msg.detail });
  }

  showWarning(msg: Aviso){
    this.messageService.add({severity: TipoAviso.WARNING, summary: msg.summary, detail: msg.detail })
  }

  showError(msg: Aviso){
    this.messageService.add({severity: TipoAviso.ERROR, summary: msg.summary, detail: msg.detail })
  }

  showSuccess(msg: Aviso){
    this.messageService.add({severity: TipoAviso.SUCCESS, summary: msg.summary, detail: msg.detail })
  }

  showSaveMessage(){
    this.messageService.add({severity: TipoAviso.SUCCESS, summary: 'Registro Guardado', detail: 'Registro guardado exitosamente!' })
  }

  showErrorSaveMessage(){
    this.messageService.add({severity: TipoAviso.ERROR, summary: 'Error al guardar', detail: 'Error al guardar el registro!' })
  }

  showInactivationMessage(){
    this.messageService.add({severity: TipoAviso.INFO, summary: 'Registro inactivado', detail: 'Registro inactivado exitosamente!', closable: false, sticky: false })
  }

  showErrorInactivationMessage(){
    this.messageService.add({severity: TipoAviso.ERROR, summary: 'Error al inactivar', detail: 'Error al inactivar el registro!' })
  }

}
