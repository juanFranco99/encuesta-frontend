import { Component, OnInit } from '@angular/core';
import {EncuestaService} from "../encuesta.service";
import {AvisoService} from "../../../services/aviso.service";
import {GeneroMusica} from "../../genero-musica/genero-musica.model";
import {GenericService} from "../../../services/generic.service";
import {GeneroMusicaService} from "../../genero-musica/genero-musica.service";
import {Encuesta} from "../encuesta.model";

@Component({
  selector: 'app-responder-encuesta',
  templateUrl: './responder-encuesta.component.html',
  styleUrls: ['./responder-encuesta.component.css']
})
export class ResponderEncuestaComponent implements OnInit {

  isSubmited: boolean = false;
  generos: GeneroMusica[];
  encuesta: Encuesta;
  isEncuestaContestada: boolean = false;


  constructor(
    private service: EncuestaService,
    private avisoService: AvisoService,
    private generoService: GeneroMusicaService
  ) { }

  ngOnInit(): void {
    this.cargarDatos();
    this.encuesta = new Encuesta();
  }

  cargarDatos(){
    this.generoService.getAll().subscribe(
      (data)=>{
        this.generos = [...data];
      }, (error)=>{
        this.avisoService.showError({summary: 'Error', detail:'No se pudo cargar el listado'})
      }
    )
  }

  async save(){
   await this.service.add(this.encuesta).subscribe(
      (data)=>{
        this.isEncuestaContestada = true;
        this.avisoService.showSaveMessage();
      },(error)=> {
        if (error && error.error) {
          let errores = Object.values(error.error);
          console.error(error);
          if (errores.length > 0) {
            this.displayErrors(errores);
          }
        } else {
          this.avisoService.showErrorSaveMessage();
        }
      }
    )
  }

  displayErrors(errores: any){
    errores.forEach((error: any) => {
      this.avisoService.showWarning({summary:'Atención', detail:error});
    })
  }

}
