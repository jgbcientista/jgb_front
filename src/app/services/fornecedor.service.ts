import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Fornecedor } from '../modelos/fornecedor.model';
import { FiltroFornecedor } from '../modelos/filtros/filtro.fornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  public apiURL = "http://localhost:8080/fornecedor";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
 
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/fornecedores')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findFornecedoresByIdServico(idServico: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/fornecedores/idServico/' +idServico)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  findFornecedoresByIdProduto(idProduto: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/fornecedores/idProduto/' +idProduto)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findFornecedoresNaoVinculados(idServico: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/fornecedores/nao-vinculado/idServico/' +idServico)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  

  findFilter(filtro: FiltroFornecedor): Observable<any> {
    return this.httpClient.get(this.apiURL + '/codigo/'+ filtro.codigo + '/nome/' + filtro.nome)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(obj:Fornecedor): Observable<any> {
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

  deleteVinculoFornecedor(id:number){
    return this.httpClient.delete(this.apiURL + '/fornecedor-servico/' + id, this.httpOptions)
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