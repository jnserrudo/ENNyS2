import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-grupo-alimento',
  templateUrl: './grupo-alimento.component.html',
  styleUrls: ['./grupo-alimento.component.css']
})
export class GrupoAlimentoComponent {
  alimento:string=''
  descripcion:string=''
  url_img:string=''
  resultados:string=''
  conclusiones:string=''
  constructor(private aRoute:ActivatedRoute){
    this.aRoute.queryParams.pipe(filter(params=>params['alimento'])).subscribe(params=>{
      this.alimento=params['alimento']
      // this.url_img=`../assets/${this.alimento.toLocaleLowerCase()}.png`

    } )
  }

  ngOnInit(){

  }
}
