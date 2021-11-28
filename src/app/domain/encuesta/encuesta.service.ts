import { Injectable } from '@angular/core';
import {GenericService} from "../../services/generic.service";
import {Encuesta} from "./encuesta.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EncuestaService extends GenericService<Encuesta>{

  constructor(
    httpClient: HttpClient
  ) {
    super("/encuesta/", httpClient)
  }

  getResumen(){
    return this.httpClient.get<any[]>(this.urlPath + 'resumen');
  }
}
