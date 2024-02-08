import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../../../../services/pessoa.service';
import { Pessoa } from '../../../../modelos/pessoa.model';
import { utilGeral } from '../../../../utils/utilGeral';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewPessoaComponent implements OnInit {
     
  id!: number;
  pessoa!: Pessoa;
  pessoaLoaded = false;
  TITULO_PAGINA_VISUALIZACAO = ' Visualização dos dados da pessoa';
    
 constructor(
    public service: PessoaService,
    private route: ActivatedRoute
   ) { }
    
  
  ngOnInit(): void {

    this.pessoa = new Pessoa();

    this.id = this.route.snapshot.params['postId'];
    this.pessoaLoaded = true;
    this.service.find(this.id).subscribe((data: Pessoa)=>{
      this.pessoa = data;
      this.pessoaLoaded = false;
    });
  }

  mascaraCpfCNPJ(cpf:any){
    return utilGeral.mascaraCpfCNPJ(cpf);
  }

  mascaraData(data:any){
    return utilGeral.dataFormata(data);
  }

  formataSexo(item:any){
    if(item== 'F'){
      return 'Feminino'
    } else {
      return 'Masculino'
    }
  }

  formataTipoPessoa(item:any){
    if(item== 'F'){
      return 'Física'
    } else {
      return 'Jurídica'
    }
  }

  
  
    
}