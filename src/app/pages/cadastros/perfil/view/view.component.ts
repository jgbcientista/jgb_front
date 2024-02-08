import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Perfil } from "../../../../modelos/perfil.model";
import { PerfilService } from "../../../../services/perfil.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewPerfilComponent implements OnInit {
     
  id!: number;
  perfil!: Perfil;
  loaded = false;
  TITULO_PAGINA_VISUALIZACAO = ' Visualização dos dados da perfil';
    
 constructor(
    public service: PerfilService,
    private route: ActivatedRoute
   ) { }
    
  
  ngOnInit(): void {

    this.perfil = new Perfil();

    this.id = this.route.snapshot.params['postId'];
    this.loaded = true;
    this.service.find(this.id).subscribe((data: Perfil)=>{
      this.perfil = data;
      this.loaded = false;
    });
  }

 }