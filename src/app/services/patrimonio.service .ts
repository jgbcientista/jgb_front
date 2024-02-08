import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FiltroPatrimonio } from '../modelos/filtros/filtro.patrimonio.model';
import { Patrimonio } from '../modelos/patrimonio.model ';

@Injectable({
  providedIn: 'root'
})
export class PatrimonioService {

 public apiURL = "http://localhost:8080/patrimonio";
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
 
  getAll(): Observable<any> {
 
    return this.httpClient.get(this.apiURL + '/patrimonios')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getTipoPatrimonios(): Observable<any> {
 
    return this.httpClient.get(this.apiURL + '/tiposPatrimonios')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findFilter(filtro: FiltroPatrimonio): Observable<any> {
 
    return this.httpClient.get(this.apiURL + '/codigo/'+ filtro.codigo + '/descricao/' + filtro.descricao + '/tipoPatrimonio/' + filtro.tipoPatrimonio)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(obj:Patrimonio): Observable<any> {
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

 update(id:number, obj:Patrimonio): Observable<any> { 

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