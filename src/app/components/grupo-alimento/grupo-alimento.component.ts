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
  alimento_grafico:string=''
  constructor(private aRoute:ActivatedRoute){
    this.aRoute.queryParams.pipe(filter(params=>params['alimento'])).subscribe(params=>{

      this.alimento=params['alimento']
      this.alimento_grafico=params['alimento'].split('y').length>1?((params['alimento'].split('y')[0].trim()+'_'+params['alimento'].split('y')[1].trim()).toLocaleLowerCase()):params['alimento'].toLocaleLowerCase()
      this.alimento_grafico=this.alimento_grafico.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      console.log(params['alimento'])
      this.url_img=`../assets/${this.alimento_grafico}.png`
      this.descripcion=params['descripcion']
      this.resultados=params['resultados']
      this.conclusiones=params['conclusiones']


    } )
  }

  ngOnInit(){
    window.scrollTo(0,0)
  }
}
