import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Pessoa } from '../modelos/pessoa.model';
import { catchError } from 'rxjs/operators';
import { FiltroPessoa } from '../modelos/filtros/filtro.pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

 public apiURL = "http://localhost:8080/pessoa";
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
 
  getAll(): Observable<any> {
    alert(1)
    return this.httpClient.get(this.apiURL + '/pessoas')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findAllCliente(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/pessoas/clientes')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findAllFornecedor(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/pessoas/fornecedores')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findFilter(filtroPessoa: FiltroPessoa): Observable<any> {
    return this.httpClient.get(this.apiURL + '/tipo/'+ filtroPessoa.tipo + '/codigo/'+ filtroPessoa.codigo + '/nome/' + filtroPessoa.nome + '/cpf/' + filtroPessoa.cpf)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  buscarRegistroByCpf(cpf: string): Observable<any> {
    return this.httpClient.get(this.apiURL+ '/cpf/'+ cpf)
    .pipe(
      catchError(this.errorHandler)
    )
  }

    
  create(obj:Pessoa): Observable<any> {
   // return this.httpClient.post(this.apiURL + '/pessoa/', JSON.stringify(obj), this.httpOptions)
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

 update(id:number, obj:Pessoa): Observable<any> { 

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
      errorMessage = error.error.message;
    } else {
      errorMessage = error.error.message;
    }
   
   return throwError(errorMessage);
 }
}