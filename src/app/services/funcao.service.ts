import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Funcao } from '../modelos/funcao.model';
import { FiltroFuncao } from '../modelos/filtros/filtro.funcao.model';

@Injectable({
  providedIn: 'root'
})
export class FuncaoService {

 public apiURL = "http://localhost:8080/funcao";
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
 
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/funcoes')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findFilter(filtro: FiltroFuncao): Observable<any> {
    return this.httpClient.get(this.apiURL + '/codigo/'+ filtro.codigo + '/descricao/' + filtro.descricao)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(obj:Funcao): Observable<any> {
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

 update(id:number, obj:Funcao): Observable<any> { 

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