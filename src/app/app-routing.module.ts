import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoAlimentoComponent } from './components/grupo-alimento/grupo-alimento.component';
import { HomeComponent } from './components/home/home.component';
import { InfoAlimentosComponent } from './components/info-alimentos/info-alimentos.component';
import { InfoRegionesComponent } from './components/info-regiones/info-regiones.component';
import { MineriaComponent } from './components/mineria/mineria.component';
import { RegionComponent } from './components/region/region.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'region',component:RegionComponent},
  {path:'alimento', component:GrupoAlimentoComponent},
  {path:'mineria',component:MineriaComponent},
  {path:'info_alimentos',component:InfoAlimentosComponent},
  {path:'info_regiones',component:InfoRegionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
