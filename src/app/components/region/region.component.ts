import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { datos  } from 'src/app/resultados';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  region:string;
  url_img:string='';
  descripcion:string=''
  resultados:string=''
  conclusiones:string=''

  region_datos:any[]=[]
  premisas:any[]=[]


  constructor(private aRoute:ActivatedRoute,private router:Router){
    this.region=this.aRoute.snapshot.paramMap.get('region')!

    this.aRoute.queryParams.pipe(filter(params=>params['region'])).subscribe(params=>{
      this.region=params['region']
      this.url_img=`../assets/${this.region.toLocaleLowerCase()}.png`
      switch(this.region){
        case 'Noa':
          this.descripcion="En la región del NOA, entre las principales relaciones existentes, se pudo descubrir que las personas que no ingerían elementos pertenecientes al grupo de las grasas, pero si ingerían tipos de carnes en una cantidad de 0 a 223.1 gramos, se puede concluir que con un 89,3% de confianza que esas personas no consumían pescados, pero si una cantidad de 0 a 50 gramos de alimentos pertenecientes al grupo de opcionales misceláneos. Otra relación importante se daba en el caso de las personas que no consumían pescados ni grasas y solo una cantidad de hasta 27.7 gramos de alimentos del grupo de aceites, las mismas con un 91,2% de confianza, se puede concluir que solo consumían hasta 50 gramos de alimentos del grupo de opcionales misceláneos."
          this.resultados="El valor consumido expresado en gramos de los grupos de alimentos que influyen en otros, son:"
          this.conclusiones="conclusiones noa"
          break;
        case 'Nea':
          this.descripcion="En la región del NEA, entre las principales relaciones existentes, se pudo descubrir que las personas que no ingerían pescados, pero si ingerían legumbres y cereales en una cantidad de 0 a 269.2 gramos, se puede concluir que con un 86,7% de confianza que esas personas consumían 2619.2 gramos del grupo relacionado con las bebidas y agua. Otra relación importante se daba en el caso de las personas que ingerían carnes, entre o y 223.1 gramos, las mismas con un 83,8% de confianza, se puede concluir que no ingerían pescados, pero sí elementos relacionados al grupo de bebidas y agua en una cantidad de 0 a 2619.2 gramos."
          this.resultados="El valor consumido expresado en gramos de los grupos de alimentos que influyen en otros, son:"
          this.conclusiones="conclusiones nea"

          break;
        case 'Centro':
          this.descripcion=`En la region del centro se pudo notar que al no consumir pescados, pero si  legumbres y cereales, es muy probable que se consuman bebidas y agua.
          Con el consumo de aceites, pero no de yogures y postres de leche, es muy probable que se consuman opcionales y misceláneos. Al no consumir pescados, pero si aceites, es muy probable que se consuman opcionales y misceláneos. Con el consumo de verduras y de dulces, es muy probable que se consuman opcionales y misceláneos.
          `
          this.resultados="El valor consumido expresado en gramos de los grupos de alimentos que influyen en otros, son:"
          this.conclusiones="conclusiones centro"

          break;
        case 'Patagonia':
          this.descripcion="En la región de la PATAGONIA, entre las principales relaciones existentes, se pudo descubrir que las personas que no ingerían pescados ni tipos de leche, se puede concluir que con un 88,1% de confianza que esas personas no consumían alimentos del grupo de yogures y postres de leche. Otra relación importante se da en el caso de las personas que no ingerían pescados, alimentos relacionados con yogures y postres de lecha ni Huevos, las mismas con un 81,2% de confianza, se puede concluir que no ingerían alimentos pertenecientes a las grasas."
          this.resultados="El valor consumido expresado en gramos de los grupos de alimentos que influyen en otros, son:"
          this.conclusiones="conclusiones patagonia"

          break;
        case 'GBA':
          this.descripcion="En la región del GBA, entre las principales relaciones existentes, se pudo descubrir que las personas que no ingerían elementos pertenecientes al grupo de yogures y postres de leche ni al grupo de huevos, se puede concluir que con un 81,7% de confianza que esas personas no consumían pescados ni grasas. Otra relación importante se daba en el caso de las personas que no consumían grasas ni frutas, las mismas con un 81,7% de confianza, se puede concluir que no consumían alimentos del grupo de opcionales misceláneos."
          this.resultados="El valor consumido expresado en gramos de los grupos de alimentos que influyen en otros, son:"
          this.conclusiones="conclusiones gba"

          break;
        case 'Cuyo':
          this.descripcion="En la región del CUYO, entre las relaciones más interesantes, se pudo descubrir que las personas que ingerían elementos pertenecientes al grupo de legumbres y cereales hasta 238.5 gramos, con un 84,6% de confianza que esas personas no consumían pescados, pero si una cantidad de hasta 46.2 gramos de alimentos pertenecientes al grupo de opcionales misceláneos. Otra relación importante se daba en el caso de las personas que no consumían grasas y solo una cantidad de hasta 76.9 gramos de alimentos del grupo de dulces, las mismas con un 84% de confianza, se puede concluir que solo consumían hasta 46.2 gramos de alimentos del grupo de opcionales misceláneos y ninguna cantidad perteneciente al grupo de pescados."
          this.resultados="El valor consumido expresado en gramos de los grupos de alimentos que influyen en otros, son:"
          this.conclusiones="conclusiones cuyo"

          break;

      }
    } )
  }

  ngOnInit(){
    for(let reg of datos){
      if(this.region.toLowerCase()==reg.region.toLowerCase()){
        this.region_datos=reg.resultados
        break;

      }
    }
    this.poner()

    this.premisas=this.region_datos.map(reg=>reg.Premises)
    for(let p of this.premisas){
      for(let i=0;i<p.length;i++){
       let remplazar=''
        if(p[i]=='='){

        }
      }
    }
    console.log("region",this.region_datos,this.premisas)
  }
  poner(){
    // for (let region of this.resultados){

    // }

    //region
    for (let regla of this.region_datos){
      if(regla.Confidence<=1){
        regla.Premises=regla.Premises.replace('-?','0.0')
        regla.Conclusion=regla.Conclusion.replace('-?','0.0')
        regla.Support*=100
        regla.Confidence*=100
        regla.Support=+regla.Support.toFixed(2)
        regla.Confidence=+regla.Confidence.toFixed(2)
      }else{
        break
      }

    }
  }
  verMineria(){
    this.router.navigate(['mineria'])
  }
}
