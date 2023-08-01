import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';
import { results } from "src/app/productos.interface"
import { take } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  plato!: results
  sumario = "";

  constructor(public productosSrv: ProductosService){
    this.productosSrv.platoSeleccionado$.pipe(take(1)).subscribe(data =>
      { this.plato = data,
        console.log("Recibiendo de Lista en productos",this.plato),
        this.sumario = this.plato.summary.replace(/<\/?[^>]+(>|$)/g, "")});
        this.productosSrv.setProductosRelacionadosSeleccionado(null);

  }

  ngOnInit(): void {
    this.productosSrv.productoRelacionadoSeleccionado$.subscribe(producto => {
      if(producto){
        this.plato = producto;
        this,this.sumario = this.plato.summary.replace(/<\/?[^>]+(>|$)/g, "");
      }})
  }

  envio(platosA: any){
  this.productosSrv.agregarProducto(platosA),console.log("agregando producto al carrito",this.productosSrv.listaProductos),
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'El plato se ha agregado a su Menú',
    showConfirmButton: false,
    timer: 1500
  }),
  this.productosSrv.sumas(),
  this.productosSrv.promedio(),
  this.productosSrv.preparacion(),
  this.productosSrv.eliminar
  };
}

