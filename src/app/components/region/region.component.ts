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
          this.descripcion=`

          Las reglas proporcionan diferentes combinaciones de ingredientes con sus respectivos límites. Algunas de estas reglas tienen en común que no contienen ciertos ingredientes, como GRASAS y PESCADOS en las primeras dos reglas, o GRASAS, PESCADOS y ACEITES en la quinta y la sexta regla.
La mayoría de las reglas tienen un valor de soporte alto, lo que indica que se cumplen en muchos de los casos. Los valores de confianza también son relativamente altos, lo que indica que la probabilidad de que un ingrediente dado esté presente si se cumplen las condiciones es alta. Los valores de lift están cerca de 1, lo que indica que no hay una fuerte correlación entre los ingredientes, pero que aún así, la ocurrencia de un ingrediente es ligeramente más probable si se cumplen las condiciones de la regla.
La regla que involucra a las verduras tiene el valor de soporte más bajo, lo que indica que esta regla no se cumple en muchos casos. Sin embargo, su valor de confianza es relativamente alto, lo que sugiere que cuando se cumplen las condiciones, hay una alta probabilidad de que haya verduras presentes. El valor de lift es cercano a 1, lo que sugiere que la presencia de verduras no está fuertemente correlacionada con la presencia de otros ingredientes en la regla.


          `
          this.conclusiones=`
          Recomendaciones basadas en las reglas de asociación para una dieta más saludable en la región del NOA en Argentina:

          Reducir consumo de grasas y carnes, favoreciendo alimentos más saludables.
          Aumentar el consumo de pescados para mejorar la calidad de la dieta.
          Diversificar la dieta con alimentos diferentes y variados.
          Reducir el consumo de dulces para fomentar alimentos más saludables.
          Aumentar el consumo de verduras para mejorar la calidad nutricional.
          Estas recomendaciones se basan en las asociaciones identificadas en las reglas de asociación y buscan promover una alimentación más equilibrada y saludable en la región del NOA.`
          break;
        case 'Nea':
          this.descripcion=`Se puede observar que el consumo de aceites es una variable frecuente en las reglas, en combinación con otros grupos de alimentos como pescados, opciones misceláneas, yogur y postres de leche, y bebidas de agua. Esto sugiere que los consumidores en la región del NEA tienen una alta preferencia por los aceites en su dieta. También se puede observar que el consumo de pescados es bajo en general, con valores de [0.0 - 0.0] en varias reglas, lo que indica que este grupo de alimentos no es un elemento frecuente en la dieta de los consumidores de la región.
          `
          this.conclusiones=`Recomendaciones basadas en patrones de consumo identificados en la región del NEA:

          Promover el consumo de pescados para mejorar la calidad de la dieta en la región.
          Limitar el consumo de opciones misceláneas, alimentos procesados y azucarados.
          Fomentar el consumo de yogures y postres de leche como fuente de calcio y proteínas.
          Priorizar el consumo de grasas saludables en lugar de aceites refinados y procesados.
          Considerar la reducción en el consumo de carnes y diversificar las fuentes de proteínas.
          Estas recomendaciones, respaldadas por el análisis de las reglas de asociación, buscan mejorar la calidad de la dieta en la región del NEA y promover hábitos alimentarios más saludables.`

          break;
        case 'Centro':
          this.descripcion=`En la región del Centro se pudo notar que al no consumir pescados, pero si  legumbres y cereales, es muy probable que se consuman bebidas y agua.
          Con el consumo de aceites, pero no de yogures y postres de leche, es muy probable que se consuman opcionales y misceláneos. Al no consumir pescados, pero si aceites, es muy probable que se consuman opcionales y misceláneos. Con el consumo de verduras y de dulces, es muy probable que se consuman opcionales y misceláneos.
          Lo novedoso e interesante de estas reglas es que nos muestran las relaciones que existen entre diferentes tipos de alimentos y sus características nutricionales. Por ejemplo, se observa que la combinación de legumbres/cereales y bebidas de agua tiene un soporte y una confianza relativamente altos, lo que sugiere que estas dos categorías de alimentos a menudo se consumen juntas.
También se puede observar que la combinación de pescados, yogur/postres de leche y aceites está asociada con una elevación relativamente alta, lo que sugiere que consumir estos alimentos juntos puede ser beneficioso para la salud.

          `
          this.conclusiones=`
          Recomendaciones basadas en patrones de consumo identificados en la región del Centro:

          Consumir más legumbres y cereales para mantener una buena hidratación.
          Aumentar el consumo de pescado como parte de una alimentación equilibrada.
          Reducir el consumo de dulces y optar por opciones más saludables.
          Limitar el consumo de alimentos procesados, dulces y bebidas azucaradas.
          Estas recomendaciones, respaldadas por el análisis de las reglas de asociación, buscan mejorar la calidad de la dieta y promover hábitos alimentarios más saludables en la población del Centro. Las reglas de asociación proporcionan una base cuantificable y objetiva para respaldar estas recomendaciones nutricionales.`

          break;
        case 'Patagonia':
          this.descripcion=`En la región de la Patagonia se presenta una gran influencia negativa en lo que respecta al grupo de yogures y postres de leche, como así también del grupo de pescados, demostrando que existe un patrón que se suele repetir dando como resultado menor consumo estos grupos de alimentos, influenciados por varias combinaciones de otros alimentos.
          `
          this.conclusiones=`
          Recomendaciones basadas en patrones de consumo identificados en la región de la Patagonia:

          Incluir pescados en la dieta para promover una mayor variedad de alimentos y nutrientes.
          Considerar productos lácteos alternativos en caso de intolerancia o preferencia personal.
          Buscar fuentes alternativas de calcio si se opta por no consumir lácteos.
          Aumentar el consumo de frutas para garantizar la ingesta de vitaminas y minerales.
          Aumentar el consumo de pescados y productos lácteos saludables como yogures y postres de leche.
          Reducir el consumo de dulces para fomentar una alimentación más saludable y equilibrada.
          Estas recomendaciones, respaldadas por el análisis de las reglas de asociación, buscan mejorar la calidad de la dieta y promover hábitos alimentarios más saludables en la población de la Patagonia.`

          break;
        case 'GBA':
          this.descripcion=`Al analizar las reglas de asociación en la región del GBA, se destaca la falta de consumo generalizado de alimentos, incluyendo opciones saludables como pescados. Esto evidencia patrones de consumo poco equilibrados y la necesidad de intervenciones nutricionales y educación alimentaria en la región.`
          this.conclusiones=`Las recomendaciones basadas en las reglas de asociación para una alimentación saludable en la región del GBA son:

          Incluir pescados en la dieta para obtener nutrientes esenciales y evitar la falta de consumo de otros alimentos importantes.

          Equilibrar el consumo de grasas para un funcionamiento adecuado del organismo, evitando restricciones excesivas.

          Considerar el consumo equilibrado de yogures y postres lácteos, evitando su exclusión, ya que están relacionados con otros alimentos nutritivos.`

          break;
        case 'Cuyo':
          this.descripcion=`En la región del Cuyo se pudo notar que con el consumo de legumbres y cereales, es muy probable que no se consuman pescados, pero si opcionales y misceláneos. Con el consumo de aceites, es muy probable que se consuman opcionales y misceláneos. Al no consumir grasas, pero sí dulces, es muy probable que se consuman opcionales y misceláneos. Al no consumir yogures y postres de leche, pero si dulces, es muy probable que se consuman opcionales y misceláneos. Con el consumo de bebidas y agua, es muy probable que se consuman opcionales y misceláneos.
          Estas reglas podrían destacar la relación entre el consumo de legumbres y cereales con la ingesta de pescados, grasas, aceites, dulces y alimentos opcionales o misceláneos en la región de Cuyo en Argentina. También se puede notar la relación entre la ingesta de dulces y la de pescados, grasas y alimentos opcionales o misceláneos.`
          this.conclusiones=`Recomendaciones para los profesionales de la nutrición en la región del Cuyo:

          Fomentar el consumo de legumbres, cereales y pescados para una alimentación equilibrada.
          Controlar el consumo de grasas y dulces, optando por opciones más saludables.
          Estas recomendaciones buscan mejorar la calidad de la dieta y promover hábitos alimentarios más saludables en la población del Cuyo.`

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
