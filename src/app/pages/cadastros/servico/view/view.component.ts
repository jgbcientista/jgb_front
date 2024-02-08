import { ActivatedRoute } from "@angular/router";
import { Servico } from "../../../../modelos/servico.model";
import { ServicoService } from "../../../../services/servico.service";
import { Component, OnInit } from "@angular/core";
import { Fornecedor } from "../../../../modelos/fornecedor.model";
import { FornecedorService } from "../../../../services/fornecedor.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewServicoComponent implements OnInit {
     
  idServico!: number;
  servico!: Servico;
  loaded = false;
  fornecedores: Fornecedor[] = [];
  TITULO_PAGINA_VISUALIZACAO = ' Visualização dos dados do serviço';
    
 constructor(
    public service: ServicoService,
    public serviceFornecedor: FornecedorService,
    private route: ActivatedRoute
   ) { }
    
  
  ngOnInit(): void {

    this.servico = new Servico();

    this.idServico = this.route.snapshot.params['postId'];
    this.loaded = true;
    this.service.find(this.idServico).subscribe((data: Servico)=>{
      this.servico = data;
      this.obterfornecedores();
      this.loaded = false;
    });
  }

  obterfornecedores(){  
    this.loaded = true;
    // obter a lista dos tipos de patrimonios
    this.serviceFornecedor.findFornecedoresByIdServico(this.idServico).subscribe((data: Fornecedor[]) => {
      this.fornecedores = data
      this.loaded = false;
    });
  }

 }