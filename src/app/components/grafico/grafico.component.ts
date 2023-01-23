import { Component, Input } from '@angular/core';
import { DataItem, LegendOptions, LegendPosition } from '@swimlane/ngx-charts/public-api';

import { datos,alimentos,alimentosxregion } from 'src/app/resultados';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {


  view: [number,number] = [450,0];
  @Input() tgrafico:string=''
  region_datos:any[]=[]
  @Input() region:string=''
  @Input() valory:string=''

  @Input() verRegiones:boolean=false
  @Input() verAlimentos:boolean=false
  alimento_datos:any[]=[]
  @Input() verAlimentosxRegion:boolean=false
  @Input() alimento:string=''






  // grafico de torta avanzado------------------------------

  // // options
  // gradient: boolean = true;
  // showLegend: boolean = true;
  // showLabels: boolean = true;
  // isDoughnut: boolean = false;
  // // legendPosition: any = 'below';

  // colorScheme :any= {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  // grafico de torta avanzado------------------------------



  // -------------------------grafico de linea------------------------------



  // options
 resultados:any=datos
 data:any[]=[]

 legend: boolean = true;
 showLabels: boolean = true;
 animations: boolean = true;
 xAxis: boolean = true;
 yAxis: boolean = true;
 showYAxisLabel: boolean = true;
 showXAxisLabel: boolean = true;
 xAxisLabel: string = 'Premisas';
 yAxisLabel: string = 'Soporte';
 timeline: boolean = true;

 colorScheme :any= {
   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a83858', '#aae385','#5AA484', '#E44825', '#C8C0BB', '#7aa8e5', '#a8885d', '#a8e3f5']
 };

  // -------------------------grafico de linea------------------------------


    // -------------------------grafico de carta------------------------------
    cardColor: string = '#232837';
    single?: any[];

  constructor() {
    // Object.assign(this, { single });



    }

    ngOnInit(){

      for(let reg of this.resultados){
        if(this.region.toLowerCase()==reg.region.toLowerCase()){
          this.region_datos=reg.resultados
          break;

        }
      }
      this.poner()

      if(this.verRegiones){
          //todas las regiones
          this.region_datos=this.resultados
          let for_regiones=this.region_datos.map((reg)=>{
            let mayor=Math.max(... reg.resultados.map((res:any)=>res.Confidence))
            return{
              name:reg.region,
              value:mayor*100
            }
          })
          console.log(for_regiones)
          this.data=for_regiones
          this.single=for_regiones
          console.log(this.data,this.single)
      }
      if(this.verAlimentos){
        this.alimento_datos=alimentos
        console.log(this.alimento_datos)
        let names=Object.keys(this.alimento_datos[0])
        let values=Object.values(this.alimento_datos[0])
        console.log(names,values)
        let for_alimentos=[]
        for(let i=0;i<names.length;i++){
          for_alimentos.push({
            name:'Gramos de '+names[i],
            value:values[i]
          })
        }
        this.data=for_alimentos
        this.single=for_alimentos
        console.log(this.data,this.single)
        this.view=[500,600]

      }

      // ------------------------------------------------
// alimentos por region
      if(this.verAlimentosxRegion){
        let for_alimxregion=[]
        let valor_alim
        console.log(alimentosxregion)
        for(let i=0;i<alimentosxregion.length;i++){
          for(let j=0 ; j<Object.keys(alimentosxregion[i]).length;j++){
            if(Object.keys(alimentosxregion[i])[j].toLocaleLowerCase().startsWith(this.alimento.toLocaleLowerCase())){
              valor_alim=Object.values(alimentosxregion[i])[j]
            }
          }
          for_alimxregion.push(
            {
              name:alimentosxregion[i].REGION,
              value:valor_alim
            }
          )
        }
        console.log(for_alimxregion)
        this.data=for_alimxregion
        this.single=for_alimxregion
        this.view=[600,300]

      }

      // ------------------------------------------------

      console.log(this.region,this.region_datos)
      this.yAxisLabel=this.valory=='confianza'?'Confianza':'Soporte'
      if(this.tgrafico=='linea'){
      let fordata={
        name:this.region,
        series:{}

      }
      let forseries=[]
      for (let regla of this.region_datos){
        forseries.push(
          {
          name:regla.Premises,
          value:this.valory=='confianza'? regla.Confidence:regla.Support
          }
        )
        }
      // console.log(forseries)
        fordata.series=[...forseries]
        console.log(fordata)
        this.data.push(fordata)
      }
      if(this.tgrafico=='burbuja'){
          let fordata={
            name:this.region,
            series:{}

          }
          let forseries=[]
          for (let regla of this.region_datos){
            forseries.push(
              {
              name:regla.Conclusion,
              x:regla.Premises,
              y:regla.Support,
              r:regla.Confidence
              }
            )
            }
          console.log(forseries)
            fordata.series=[...forseries]
            console.log(fordata)
            this.bubbleData.push(fordata)


      }
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



  // -------------------------grafico de burbuja------------------------------


  bubleData:any=[]


  bubbleData: any[]=[];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabelBurbuja: boolean = true;
  yAxisLabelBurbuja: string = 'Soporte';
  showYAxisLabelBurbuja: boolean = true;
  xAxisLabelBurbuja: string = 'Premisas';
  maxRadius: number = 15;
  minRadius: number = 5;
  yScaleMin: number = 30;
  yScaleMax: number = 50;

  xScaleMin:number=0
  xScaleMax:number=0

  // colorScheme:any = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  // };


  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  // ----------------tree map chart

  labelFormatting(c:any) {
    return `${(c.label)} ${this.verAlimentos?"Gramos":''} `;
  }






}
