import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Funcao } from "../../../../modelos/funcao.model";
import { FuncaoService } from "../../../../services/funcao.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewFuncaoComponent implements OnInit {
     
  id!: number;
  funcao!: Funcao;
  loaded = false;
  TITULO_PAGINA_VISUALIZACAO = ' Visualização dos dados da função';
    
 constructor(
    public service: FuncaoService,
    private route: ActivatedRoute
   ) { }
    
  
  ngOnInit(): void {

    this.funcao = new Funcao();

    this.id = this.route.snapshot.params['postId'];
    this.loaded = true;
    this.service.find(this.id).subscribe((data: Funcao)=>{
      this.funcao = data;
      this.loaded = false;
    });
  }

 }