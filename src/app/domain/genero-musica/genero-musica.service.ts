import { Injectable } from '@angular/core';
import {GenericService} from "../../services/generic.service";
import {GeneroMusica} from "./genero-musica.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GeneroMusicaService extends GenericService<GeneroMusica>{

  constructor(
    httpClient: HttpClient
  ) {
    super("/genero/", httpClient)
  }
}
