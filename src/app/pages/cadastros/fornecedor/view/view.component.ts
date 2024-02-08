import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Fornecedor } from "../../../../modelos/fornecedor.model";
import { Pessoa } from "../../../../modelos/pessoa.model";
import { PessoaService } from "../../../../services/pessoa.service";
import { ServicoService } from "../../../../services/servico.service";
import { ServicoContratadoNaoContratadoDTO } from "../../../../modelos/servicocontratadonaocontratado.model";
import { FornecedorService } from "../../../../services/fornecedor.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewFornecedorComponent implements OnInit {
     
  idPessoa!: number;
  fornecedor!: Pessoa;
  loaded = false;
  TITULO_PAGINA_VISUALIZACAO = ' Visualização dos dados do fornecedor';
  servicosVinculados: any;
  servicosNaoVinculados: any
  produtosVinculados: any
  produtosNaoVinculados: any
    
 constructor(
    public service: FornecedorService,
    public pessoaService: PessoaService,
    private route: ActivatedRoute,
     public servicoService: ServicoService,
   ) { }


  ngOnInit(): void {

    this.fornecedor = new Fornecedor();
    this.idPessoa = this.route.snapshot.params['postId'];
   
     this.loaded = true;
    this.pessoaService.find(this.idPessoa).subscribe((data: Pessoa)=>{
      this.fornecedor = data;
      this.loaded = false;
      this.loadProdutoServico();
    });
}

  loadProdutoServico(): void {
    this.servicoService.obterServicosVinculadosNaoVinculados(this.idPessoa).subscribe((data: ServicoContratadoNaoContratadoDTO)=>{      
        this.servicosVinculados = data.servicosContratados;
        this.servicosNaoVinculados = data.servicosNaoContratados;
        this.produtosVinculados = data.produtosContratados;
        this.produtosNaoVinculados = data.produtosNaoContratados;
        this.loaded = false;
      });
  }

 }