import { Component, OnInit } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {GeneroMusicaService} from "../genero-musica.service";
import {GeneroMusica} from "../genero-musica.model";
import {AvisoService} from "../../../services/aviso.service";
import {validate} from "class-validator";

@Component({
  selector: 'app-genero-musica-edit',
  templateUrl: './genero-musica-edit.component.html',
  styleUrls: ['./genero-musica-edit.component.css']
})
export class GeneroMusicaEditComponent implements OnInit {

  genero: GeneroMusica = new GeneroMusica();

  isSubmited: boolean = false;

  constructor(
    public ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private service: GeneroMusicaService,
    private avisoService: AvisoService
  ) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    let id = this.config.data.idGenero;
    if(id){
      this.service.getById(id).subscribe(
        (data)=>{
          this.genero = {...data}
        },(error)=>{
          this.avisoService.showError({summary:'Error', detail: 'No se pudo cargar el genero seleccionado'})
        }
      )
    } else {
      this.genero = new GeneroMusica();
    }
  }


  save(){
    this.isSubmited = true;
    if(this.genero.id){
      this.service.update(this.genero.id, this.genero).subscribe(
        (data)=>{
          this.genero = {...data};
          this.avisoService.showSaveMessage();
          this.closeDialog();
        },(error)=>{
          if(error && error.error){
            let errores = Object.values(error.error);
            if(errores.length > 0){
              this.displayErrors(errores);
            }
          } else {
            this.avisoService.showErrorSaveMessage();
          }
        }
      )
    } else {
      this.service.add(this.genero).subscribe(
        (data)=>{
          this.genero = {...data};
          this.avisoService.showSaveMessage();
          this.closeDialog();
        },(error)=> {
          if (error && error.error) {
            let errores = Object.values(error.error);
            if (errores.length > 0) {
              this.displayErrors(errores);
            }
          } else {
            this.avisoService.showErrorSaveMessage();
          }
        }
      )
    }
  }

  displayErrors(errores: any){
    errores.forEach((error: any) => {
      this.avisoService.showWarning({summary:'Atención', detail:error});
    })
  }

  closeDialog(){
    this.ref.close(false);
  }

}
