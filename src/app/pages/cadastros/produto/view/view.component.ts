import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../../../services/produto.service';
import { Produto } from '../../../../modelos/produto.model ';
import { FornecedorService } from '../../../../services/fornecedor.service';
import { Fornecedor } from '../../../../modelos/fornecedor.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewProdutoComponent implements OnInit {
     
  idProduto!: number;
  fornecedores: Fornecedor[] = [];
  produto!: Produto;
  loaded = false;
  TITULO_PAGINA_VISUALIZACAO = ' Visualização dos dados do produto';
    
 constructor(
    public service: ProdutoService,
    public serviceFornecedor: FornecedorService,
    private route: ActivatedRoute
   ) { }
    
  
  ngOnInit(): void {

    this.produto = new Produto();

    this.idProduto = this.route.snapshot.params['postId'];
    this.loaded = true;
    this.service.find(this.idProduto).subscribe((data: Produto)=>{
      this.produto = data;
      this.obterfornecedores();
      this.loaded = false;
    });
  }

  obterfornecedores(){  
    this.loaded = true;
    // obter a lista dos tipos de patrimonios
    this.serviceFornecedor.findFornecedoresByIdProduto(this.idProduto).subscribe((data: Fornecedor[]) => {
      this.fornecedores = data
      this.loaded = false;
    });
  }

 }