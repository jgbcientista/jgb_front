import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ProdutoService } from '../../../../services/produto.service';
import { Fornecedor } from '../../../../modelos/fornecedor.model';
import { FornecedorService } from '../../../../services/fornecedor.service';
     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateProdutoComponent implements OnInit {
    
  form!: FormGroup;
  submitted = false;
  msgErro = false;
  msgSucesso = false;
  operacao = "Cadastro";
  TITULO_PAGINA_CREATE = 'Ficha de Cadastro';
  fornecedores: Fornecedor[] = [];
  loaded = false;

  constructor(
    public service: ProdutoService,
    private fb: FormBuilder,
    public serviceFornecedor: FornecedorService,
    private router: Router
  ) { }
    
  
  ngOnInit(): void {
    this.nova();
    this.obterfornecedores();
  }
  
  
  obterfornecedores(){  
    this.loaded = true;
    // obter a lista dos tipos de patrimonios
    this.serviceFornecedor.getAll().subscribe((data: Fornecedor[]) => {
      this.fornecedores = data
      this.loaded = false;
    });
  }
  get f(){
    return this.form.controls;
  }
  
  onSubmit(): void {

		this.submitted = true;
    if(this.form.invalid) {
			return;
		}

    this.operacao = "Edição";
    if (!this.form.valid) {
      this.msgErro = true;
      this.msgSucesso = false;
      console.log(this.msgErro);
      return;
    }
  
   this.service.create(this.form.value).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.msgErro = false;
        this.msgSucesso = true;
        this.router.navigateByUrl('list-produto');
      },
      error: (e) => console.error(e),
    });
  }

  limpar(){
    this.nova();
  }

  nova(): void {
    this.form = this.fb.group({
      descricao: ['', Validators.required],
      idsFornecedores: []
    });
  }

}