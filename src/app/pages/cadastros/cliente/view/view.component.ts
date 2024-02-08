import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Cliente } from "../../../../modelos/cliente.model";
import { ClienteService } from "../../../../services/cliente.service";
import { Pessoa } from "../../../../modelos/pessoa.model";
import { PessoaService } from "../../../../services/pessoa.service";
import { ServicoService } from "../../../../services/servico.service";
import { ServicoContratadoNaoContratadoDTO } from "../../../../modelos/servicocontratadonaocontratado.model";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewClienteComponent implements OnInit {
     
  idPessoa!: number;
  cliente!: Pessoa;
  loaded = false;
  TITULO_PAGINA_VISUALIZACAO = ' Visualização dos dados do cliente';
  servicosContratados: any;
  servicosNaoContratados: any
  produtosContratados: any
  produtosNaoContratados: any
    
 constructor(
    public service: ClienteService,
    public pessoaService: PessoaService,
    private route: ActivatedRoute,
     public servicoService: ServicoService,
   ) { }


  ngOnInit(): void {

    this.cliente = new Cliente();
    this.idPessoa = this.route.snapshot.params['postId'];
   
     this.loaded = true;
    this.pessoaService.find(this.idPessoa).subscribe((data: Pessoa)=>{
      this.cliente = data;
      this.loaded = false;
      this.loadProdutoServico();
    });
}

  loadProdutoServico(): void {
    this.servicoService.obterServicosVinculadosNaoVinculados(this.idPessoa).subscribe((data: ServicoContratadoNaoContratadoDTO)=>{      
        this.servicosContratados = data.servicosContratados;
        this.servicosNaoContratados = data.servicosNaoContratados;
        this.produtosContratados = data.produtosContratados;
        this.produtosNaoContratados = data.produtosNaoContratados;
        this.loaded = false;
      });
  }

 }