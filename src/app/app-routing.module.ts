import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './buscar/buscar.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { AutorizacionGuard } from './autorizacion.guard';

const rutas: Routes = [
                        { path: "lista-productos", component: ListaProductosComponent, canActivate: [AutorizacionGuard]},
                        { path: "productos", component: ProductosComponent, canActivate: [AutorizacionGuard]},
                        { path: "buscar", component: BuscarComponent, canActivate: [AutorizacionGuard]},
                        { path: "login", component: LoginComponent },
                        { path: "carrito", component: CarritoComponent, canActivate: [AutorizacionGuard]},
                        { path: "", redirectTo: "/login", pathMatch: "full" },
                        { path: "**", redirectTo: "/login", pathMatch: "full"}];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
