import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { AlimentosComponent } from './components/alimentos/alimentos.component';
import { HeaderComponent } from './components/header/header.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { RegionComponent } from './components/region/region.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GrupoAlimentoComponent } from './components/grupo-alimento/grupo-alimento.component';
import { MineriaComponent } from './components/mineria/mineria.component';
import { InfoRegionesComponent } from './components/info-regiones/info-regiones.component';
import { InfoAlimentosComponent } from './components/info-alimentos/info-alimentos.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    CarruselComponent,
    AlimentosComponent,
    HeaderComponent,
    EncuestaComponent,
    RegionComponent,
    GraficoComponent,
    GrupoAlimentoComponent,
    MineriaComponent,
    InfoRegionesComponent,
    InfoAlimentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
