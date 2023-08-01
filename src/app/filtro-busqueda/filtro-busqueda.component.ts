import { Component } from '@angular/core';
import { ProductosService } from '../productos/productos.service';
import { BuscarComponent } from '../buscar/buscar.component';

@Component({
  selector: 'app-filtro-busqueda',
  templateUrl: './filtro-busqueda.component.html',
  styleUrls: ['./filtro-busqueda.component.css']
})
export class FiltroBusquedaComponent {

  constructor(private productosService: ProductosService, private buscar: BuscarComponent){

  }

  seleccionarMenu(menu:string){
    this.productosService.getProductos(menu).subscribe((data => this.buscar.platosBusqueda = data.results))
  };

}
