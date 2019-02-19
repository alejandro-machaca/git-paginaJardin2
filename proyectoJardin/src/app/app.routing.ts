import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ObtenerContactoComponent } from './components/obtener-contacto/obtener-contacto.component';
import { ObtenerDatosComponent } from './components/obtener-datos/obtener-datos.component';

const appRoutes: Routes = [
    // Ejemplo de codigo a agregar
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'detalle', component: DetalleComponent},
    {path: 'contacto', component: ObtenerContactoComponent},
    {path: 'datos', component: ObtenerDatosComponent},
    {path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
