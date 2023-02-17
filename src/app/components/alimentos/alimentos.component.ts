import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent {

  constructor(private router:Router){

  }
  verAlimento(alim:string,des:string,res:string,con:string){
    this.router.navigate(['alimento'],{queryParams:{alimento:alim,descripcion:des, resultados:res, conclusiones:con}})
  }
}
