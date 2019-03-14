import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ObtenerContactoComponent } from './components/obtener-contacto/obtener-contacto.component';
import { ObtenerDatosComponent } from './components/obtener-datos/obtener-datos.component';
import { Detalle1Component } from './components/detalle/detalle1/detalle1.component';
import { Detalle2Component } from './components/detalle/detalle2/detalle2.component';
import { Detalle3Component } from './components/detalle/detalle3/detalle3.component';
import { Detalle4Component } from './components/detalle/detalle4/detalle4.component';
import { Detalle5Component } from './components/detalle/detalle5/detalle5.component';
import { Detalle6Component } from './components/detalle/detalle6/detalle6.component';
import { InfoComponent } from './components/info/info.component';

const appRoutes: Routes = [
    // Ejemplo de codigo a agregar
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'detalle', component: DetalleComponent},
    {path: 'contacto', component: ObtenerContactoComponent},
    {path: 'datos', component: ObtenerDatosComponent},
    {path: 'detalle1', component: Detalle1Component},
    {path: 'detalle2', component: Detalle2Component},
    {path: 'detalle3', component: Detalle3Component},
    {path: 'detalle4', component: Detalle4Component},
    {path: 'detalle5', component: Detalle5Component},
    {path: 'detalle6', component: Detalle6Component},
    {path: 'info', component: InfoComponent},
    {path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
