import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from '../modelos/cliente.model';
import { FiltroCliente } from '../modelos/filtros/filtro.cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public apiURL = "http://localhost:8080/cliente";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
 
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/clientes')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findFilter(filtro: FiltroCliente): Observable<any> {
    return this.httpClient.get(this.apiURL + '/codigo/'+ filtro.codigo + '/nome/' + filtro.nome)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(obj:Cliente): Observable<any> {
   return this.httpClient.post(this.apiURL + '/', obj, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  
  find(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

 update(id:number, obj:any): Observable<any> { 
    return this.httpClient.put(this.apiURL + '/' + id, obj, this.httpOptions)
  .pipe( 
        catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      alert(errorMessage)
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código de erro: ${error.status}\nMensagem: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}