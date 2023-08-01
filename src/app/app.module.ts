import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule} from "@angular/material/badge";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule} from '@angular/material/tabs'
import { CarritoComponent } from './carrito/carrito.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ProductosComponent } from './productos/productos.component';
import { BuscarComponent } from './buscar/buscar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './productos/productos.service';
import { userService } from './user.service';
import { FooterComponent } from './footer/footer.component';
import { FiltroBusquedaComponent } from './filtro-busqueda/filtro-busqueda.component';
import { ProductosRelacionadosComponent } from './productos-relacionados/productos-relacionados.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    ProductosComponent,
    BuscarComponent,
    NavBarComponent,
    LoginComponent,
    CarritoComponent,
    FooterComponent,
    FiltroBusquedaComponent,
    ProductosRelacionadosComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatDividerModule,
    MatToolbarModule, MatIconModule, MatTableModule, MatBadgeModule, MatMenuModule, MatTabsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [userService, ProductosService, NavBarComponent, BuscarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
