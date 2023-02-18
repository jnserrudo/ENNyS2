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
  concluciones_premisas:any[]=[]
  reglas:any[]=[]


  constructor(private aRoute:ActivatedRoute,private router:Router){
    this.region=this.aRoute.snapshot.paramMap.get('region')!

    this.aRoute.queryParams.pipe(filter(params=>params['region'])).subscribe(params=>{
      this.region=params['region']
      this.url_img=`../assets/${this.region.toLocaleLowerCase()}.png`
      this.resultados='En la siguiente tabla se puede visualizar la cantidad en gramos de grupos alimentos que pueden influir sobre otros, en la columna de las premisas, se tienen las cantidades de ciertos grupos de alimentos que al ser consumidas, existe una alta probabilidad de que los habitantes de la región, consuman una cantidad determinada de cierto grupo alimenticio especificada en la columna de las conclusiones.'
      switch(this.region){
        case 'Noa':
          this.descripcion=`En la región del Noa se pudo notar que al no consumir grasas, pero sí carnes, es muy probable que no se consuma pescados, pero si Opcionales y Misceláneos. Con el consumo de carnes, es muy probable que no se consuma pescados, pero si opcionales y misceláneos. Con el consumo de aceites, es muy probable que no se consuma pescados, pero si opcionales y misceláneos. Al no consumir grasas, pero sí dulces, es muy probable que no se consuma pescados, pero si opcionales y misceláneos. Al consumir verduras, es muy probable que no se consuma pescados, pero si opcionales y misceláneos.`
          this.conclusiones="En la región del Noa, entre las principales relaciones, se encuentra influido el grupo de pescados y opcionales y misceláneos."
          break;
        case 'Nea':
          this.descripcion="En la región del Nea se pudo notar que el no consumo de pescados, conjunto al consumo de legumbres y cereales provoca un consumo en el grupo de bebidas y agua. Con determinado consumo de carnes, es muy probable que no se consuma pescados, pero si bebidas y agua. Con el no consumo de pescados, pero si consumo de grupos de aceites como así también de opcionales y misceláneos, es muy probable que se consuma Bebidas y Agua. Con el no consumo de grasas, pero si de aceites, es muy probable que se consuma Bebidas y Agua. Con el consumo del grupo de aceites y del grupo de bebidas y agua, es muy probable que no se consuma pescados, pero si opcionales y misceláneos."
          this.conclusiones="En la región del Nea, entre las principales relaciones, se encuentra influido el grupo de pescados y el de bebidas y agua."

          break;
        case 'Centro':
          this.descripcion=`En la región del Centro se pudo notar que al no consumir pescados, pero si  legumbres y cereales, es muy probable que se consuman bebidas y agua.
          Con el consumo de aceites, pero no de yogures y postres de leche, es muy probable que se consuman opcionales y misceláneos. Al no consumir pescados, pero si aceites, es muy probable que se consuman opcionales y misceláneos. Con el consumo de verduras y de dulces, es muy probable que se consuman opcionales y misceláneos.
          `
          this.conclusiones="En la región del Centro, entre las principales relaciones, se encuentra influido el grupo de bebidas y aguas y el de opcionales y misceláneos."

          break;
        case 'Patagonia':
          this.descripcion="En la región de la Patagonia se pudo notar que al no consumir pescados ni leches, es muy probable que si se consuma Yogures y Postres de Leche. Al consumir leche, es muy probable que se consuma Yogures y Postres de Leche. Al no consumir pescados, huevos y yogures y postres de leche, es muy probable que no se consuman grasas. Al no consumir frutas, es muy probable que no se consuman pescados ni Yogures y Postres de Leche. Al no consumir grasas ni dulces, es muy probable que no se consuma Yogures y Postres de Leche."
          this.conclusiones="En la región del Patagonia, entre las principales relaciones, se encuentra influido el grupo de yogures, postres de leche, pescados y grasas."

          break;
        case 'GBA':
          this.descripcion="En la región del GBA se pudo notar que al no consumir huevos ni yogures y postres de leche, es muy probable que no se consuman pescados ni grasas. Al no consumir grasas ni frutas, es muy probable que no se consuman pescados ni yogures y postres de leche. Al no consumir pescados ni frutas, es muy probable que no se consuman grasas. Al no consumir pescados ni quesos, es muy probable que no se consuman grasas. Con el consumo de frutas, es muy probable que no se consuman pescados."
          this.conclusiones="En la región del GBA, entre las principales relaciones, se encuentra influido el grupo de pescados, grasas, yogures y postres de lece."

          break;
        case 'Cuyo':
          this.descripcion="En la región del Cuyo se pudo notar que con el consumo de legumbres y cereales, es muy probable que no se consuman pescados, pero si opcionales y misceláneos. Con el consumo de aceites, es muy probable que se consuman opcionales y misceláneos. Al no consumir grasas, pero sí dulces, es muy probable que se consuman opcionales y misceláneos. Al no consumir yogures y postres de leche, pero si dulces, es muy probable que se consuman opcionales y misceláneos. Con el consumo de bebidas y agua, es muy probable que se consuman opcionales y misceláneos."
          this.conclusiones="En la región del Cuyo, entre las principales relaciones, se encuentra influido el grupo de pescados y opcionales y misceláneos."

          break;

      }
    } )
  }

  ngOnInit(){
    window.scrollTo(0,0)

    for(let reg of datos){
      if(this.region.toLowerCase()==reg.region.toLowerCase()){
        this.region_datos=reg.resultados
        break;

      }
    }
    this.poner()
    console.log(this.region_datos)
    this.reglas=this.region_datos.map(reg=>[reg.Premises.replace("_"," Y ").replace("SdL","S de L"),reg.Conclusion.replace("_"," Y ").replace("SdL","S de L")])

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
