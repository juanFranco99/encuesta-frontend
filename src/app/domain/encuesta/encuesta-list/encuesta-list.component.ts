import { Component, OnInit } from '@angular/core';
import {GeneroMusica} from "../../genero-musica/genero-musica.model";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {EncuestaService} from "../encuesta.service";
import {Encuesta} from "../encuesta.model";
import {AvisoService} from "../../../services/aviso.service";

@Component({
  selector: 'app-encuesta-list',
  templateUrl: './encuesta-list.component.html',
  styleUrls: ['./encuesta-list.component.css']
})
export class EncuestaListComponent implements OnInit {

  encuestas: Encuesta[];
  ref!: DynamicDialogRef;

  constructor(
    private service: EncuestaService,
    public dialogService: DialogService,
    private avisoService: AvisoService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getAll().subscribe(
      (data)=>{
        this.encuestas = [...data];
      }, (error)=>{
        this.avisoService.showError({summary: 'Error', detail:'No se pudo cargar el listado'})
      }
    )
  }
}
