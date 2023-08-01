import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos/productos.service';
import { results } from '../productos.interface';
import { userService } from '../user.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements  OnInit {
  busqueda: any;
  platosBusqueda!: results[];

  constructor(private productosService : ProductosService, private userSrv: userService) { }

  ngOnInit() {
    this.buscar();
    this.userSrv.getToken();
  }

buscar(){
 this.productosService.getProductos(this.busqueda).subscribe
 ((data: any) => {this.platosBusqueda = data.results; console.log('busqueda', this.platosBusqueda)});
};

seleccionarMenu(menu:string){
  this.productosService.getProductos(menu).subscribe((data => this.platosBusqueda = data.results))
};

}
