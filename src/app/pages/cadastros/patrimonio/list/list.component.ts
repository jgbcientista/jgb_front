import { Component, OnInit } from "@angular/core";
import { utilGeral } from "../../../../utils/utilGeral";
import { FiltroPatrimonio } from "../../../../modelos/filtros/filtro.patrimonio.model";
import { Patrimonio } from "../../../../modelos/patrimonio.model ";
import { PatrimonioService } from "../../../../services/patrimonio.service ";
 
declare const bootstrap: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

 export class ListarPatrimonioComponent implements OnInit {

  paginaAtual = 1;
  patrimonios: Patrimonio[] = [];
  tipoPatrimonios: string[] = [];
  possuiRegistros = false;
  idModal: number;
  loaded: boolean;
  modal: any;
  filtro!: FiltroPatrimonio;
  
constructor(public service: PatrimonioService) { 
  this.idModal = 0;
  this.loaded = false;
}  

ngOnInit(): void { 
  this.filtro = new FiltroPatrimonio();
  this.findAll();
  this.carregarDados();
};

findAll(){
 
  this.loaded = true;
  this.service.getAll().subscribe((data: Patrimonio[]) => {
    this.patrimonios = data
    this.possuiRegistros = true;
    this.loaded = false;
  });
}

carregarDados(){
  
  this.loaded = true;
  // obter a lista dos tipos de patrimonios
  this.service.getTipoPatrimonios().subscribe((data: string[]) => {
    this.tipoPatrimonios = data
    this.possuiRegistros = true;
    this.loaded = false;
  });
}

findFilter(){
  this.loaded = true;
  this.service.findFilter(this.filtro).subscribe((data: Patrimonio[]) => {
    this.patrimonios = data
    this.possuiRegistros = true;
    this.loaded = false;
  });
}

  delete(id:number){
    this.loaded = true;
    this.service.delete(id).subscribe(res => {
        // apos a remocao fisica, retira da lista
        this.patrimonios = this.patrimonios.filter(item => item.id !== id);
         console.log('Item deletado com sucesso.');
         alert("Item deletado com sucesso.")
         this.loaded = false;
      }
    )
  }

  abrirModal(item: any) {
    this.idModal = item.id;
    this.loaded = true;
    
    if (this.modal === undefined) {
      this.modal = new bootstrap.Modal(document.getElementById('modalExclusao'), {
        keyboard: true
      })
      const select = document.getElementById('modalExclusao')
      select?.addEventListener('hidden.bs.modal', this.onCloseModal.bind(this));
    }
    this.modal?.show();
  }

  onCloseModal() {
    this.idModal = 0;
    this.loaded = false;
 
  }

  mascaraCpfCNPJ(cpf:any){
  return utilGeral.mascaraCpfCNPJ(cpf);
  }

  limpar(){
    this.patrimonios = [];
    this.possuiRegistros = false;
    this.loaded = false;
    this.filtro = new FiltroPatrimonio();
  }

}
 

