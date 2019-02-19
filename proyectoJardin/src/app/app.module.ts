import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ObtenerContactoComponent } from './components/obtener-contacto/obtener-contacto.component';
import { ObtenerDatosComponent } from './components/obtener-datos/obtener-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ErrorComponent,
    DetalleComponent,
    ObtenerContactoComponent,
    ObtenerDatosComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
