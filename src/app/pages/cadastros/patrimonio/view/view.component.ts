import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Patrimonio } from "../../../../modelos/patrimonio.model ";
import { PatrimonioService } from "../../../../services/patrimonio.service ";
 
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewPatrimonioComponent implements OnInit {
     
  id!: number;
  patrimonio!: Patrimonio;
  loaded = false;
  TITULO_PAGINA_VISUALIZACAO = ' Visualização dos dados do patrimônio';
    
 constructor(
    public service: PatrimonioService,
    private route: ActivatedRoute
   ) { }
    
  
  ngOnInit(): void {

    this.patrimonio = new Patrimonio();

    this.id = this.route.snapshot.params['postId'];
    this.loaded = true;
    this.service.find(this.id).subscribe((data: Patrimonio)=>{
      this.patrimonio = data;
      this.loaded = false;
    });
  }

 }