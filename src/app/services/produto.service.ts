import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Produto } from '../modelos/produto.model ';
import { FiltroProduto } from '../modelos/filtros/filtro.produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

 public apiURL = "http://localhost:8080/produto";
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
 
  getAll(): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/produtos')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findFilter(filtro: FiltroProduto): Observable<any> {
    console.log(filtro.descrciao);
    
    return this.httpClient.get(this.apiURL + '/codigo/'+ filtro.codigo + '/descricao/' + filtro.descrciao)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(obj:any): Observable<any> {    
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

 update(id:number, obj:Produto): Observable<any> { 
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

  removerAssociacaoProdutoCliente(idProduto:number, idCliente:number){
    return this.httpClient.delete(this.apiURL + '/idProduto/' + idProduto + '/idCliente/' + idCliente, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  removerAssociacaoProdutoFornecedor(idProduto:number, idFornecedor:number){
    return this.httpClient.delete(this.apiURL + '/idProduto/' + idProduto + '/idFornecedor/' + idFornecedor, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código de erro: ${error.status}\nMensagem: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}