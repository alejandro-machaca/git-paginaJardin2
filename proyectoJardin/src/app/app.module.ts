import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ObtenerContactoComponent } from './components/obtener-contacto/obtener-contacto.component';
import { ObtenerDatosComponent } from './components/obtener-datos/obtener-datos.component';
import { InfoComponent } from './components/info/info.component';
import { Detalle1Component } from './components/detalle/detalle1/detalle1.component';
import { Detalle2Component } from './components/detalle/detalle2/detalle2.component';
import { Detalle3Component } from './components/detalle/detalle3/detalle3.component';
import { Detalle4Component } from './components/detalle/detalle4/detalle4.component';
import { Detalle5Component } from './components/detalle/detalle5/detalle5.component';
import { Detalle6Component } from './components/detalle/detalle6/detalle6.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ErrorComponent,
    DetalleComponent,
    ObtenerContactoComponent,
    ObtenerDatosComponent,
    InfoComponent,
    Detalle1Component,
    Detalle2Component,
    Detalle3Component,
    Detalle4Component,
    Detalle5Component,
    Detalle6Component
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
