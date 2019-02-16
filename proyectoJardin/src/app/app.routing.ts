import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const appRoutes: Routes = [
    // Ejemplo de codigo a agregar
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'detalle', component: DetalleComponent},
    {path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
