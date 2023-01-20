import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

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

  constructor(private aRoute:ActivatedRoute,private router:Router){
    this.region=this.aRoute.snapshot.paramMap.get('region')!

    this.aRoute.queryParams.pipe(filter(params=>params['region'])).subscribe(params=>{
      this.region=params['region']
      this.url_img=`../assets/${this.region.toLocaleLowerCase()}.png`
      switch(this.region){
        case 'Noa':
          this.descripcion="Descripcion noa"
          this.resultados="Resultados noa"
          this.conclusiones="conclusiones noa"
          break;
        case 'Nea':
          this.descripcion="Descripcion nea"
          this.resultados="Resultados nea"
          this.conclusiones="conclusiones nea"

          break;
        case 'Centro':
          this.descripcion="Descripcion centro"
          this.resultados="Resultados centro"
          this.conclusiones="conclusiones centro"

          break;
        case 'Patagonia':
          this.descripcion="Descripcion patagonia"
          this.resultados="Resultados patagonia"
          this.conclusiones="conclusiones patagonia"

          break;
        case 'GBA':
          this.descripcion="Descripcion gba"
          this.resultados="Resultados gba"
          this.conclusiones="conclusiones gba"

          break;
        case 'Cuyo':
          this.descripcion="Descripcion cuyo"
          this.resultados="Resultados cuyo"
          this.conclusiones="conclusiones cuyo"

          break;

      }
    } )
  }

  verMineria(){
    this.router.navigate(['mineria'])
  }
}
