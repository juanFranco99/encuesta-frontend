import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
export abstract class GenericService<T> {

  protected httpClient: HttpClient;
  protected urlPath: string =  `${environment.URL_API}`;

  constructor(urlPath: string, httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.urlPath = this.urlPath + urlPath;
  }

  getAll(){
    return this.httpClient.get<T[]>(this.urlPath);
  }

  getById(id: any){
    return this.httpClient.get<T>(this.urlPath + id);
  }

  add(obj: T){
    return this.httpClient.post<T>(this.urlPath, obj);
  }

  update(id: any, obj: T){
    return this.httpClient.put<T>(this.urlPath + id, obj);
  }

  delete(id: any){
    return this.httpClient.delete(this.urlPath + id);
  }

}
