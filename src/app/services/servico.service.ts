import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Servico } from '../modelos/servico.model';
import { FiltroServico } from '../modelos/filtros/filtro.servico.model';
import { ServicoContratadoNaoContratadoDTO } from '../modelos/servicocontratadonaocontratado.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

 public apiURL = "http://localhost:8080/servico";
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
 
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/servicos')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findFilter(filtro: FiltroServico): Observable<any> {
    return this.httpClient.get(this.apiURL + '/codigo/'+ filtro.codigo + '/descricao/' + filtro.descrciao)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  obterServicosVinculadosNaoVinculados(idPessoa: number): Observable<ServicoContratadoNaoContratadoDTO> {
    return this.httpClient.get(this.apiURL + '/contratado-nao-contrados/idPessoa/'+ idPessoa)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(obj:Servico): Observable<any> {
   return this.httpClient.post(this.apiURL + '/', obj, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  
  removerAssociacaoServicoFornecedor(idServico:number, idFornecedor:number){    
    return this.httpClient.delete(this.apiURL + '/idServico/' + idServico + '/idFornecedor/' + idFornecedor, this.httpOptions)
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

 update(id:number, obj:Servico): Observable<any> { 

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

  removerAssociacao(idServico:number, idCliente:number){
    return this.httpClient.delete(this.apiURL + '/idServico/' + idServico + '/idCliente/' + idCliente, this.httpOptions)
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