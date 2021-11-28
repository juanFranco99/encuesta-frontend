import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GeneroMusica} from "../genero-musica.model";
import {GeneroMusicaService} from "../genero-musica.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {GeneroMusicaEditComponent} from "../genero-musica-edit/genero-musica-edit.component";
import {AvisoService} from "../../../services/aviso.service";

@Component({
  selector: 'app-genero-musica-list',
  templateUrl: './genero-musica-list.component.html',
  styleUrls: ['./genero-musica-list.component.css']
})
export class GeneroMusicaListComponent implements OnInit {

  generos: GeneroMusica[];
  ref!: DynamicDialogRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: GeneroMusicaService,
    public dialogService: DialogService,
    private avisoService: AvisoService
  ) {
    this.editGenero = this.editGenero.bind(this);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getAll().subscribe(
      (data)=>{
        this.generos = [...data];
      }, (error)=>{
        this.avisoService.showError({summary: 'Error', detail:'No se pudo cargar el listado'})
      }
    )
  }

  editGenero(ev: any) {
    this.openDialogGenero(ev.row.data.id)
  }

  openDialogGenero(id: any){
    this.ref = this.dialogService.open(GeneroMusicaEditComponent, {
      header: 'Genero Musica',
      width: '70%',
      contentStyle: { "max-height": "600px", "overflow": "auto" },
      baseZIndex: 10000,
      data: {
        idGenero: id
      }
    });

    this.ref.onClose.subscribe(()=> this.getData());
  }

}
