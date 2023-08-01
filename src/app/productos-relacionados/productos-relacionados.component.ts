import { Component } from '@angular/core';
import { ProductosService } from '../productos/productos.service';
import { results } from '../productos.interface';

@Component({
  selector: 'app-productos-relacionados',
  templateUrl: './productos-relacionados.component.html',
  styleUrls: ['./productos-relacionados.component.css']
})

export class ProductosRelacionadosComponent {
  productosRelacionados:any

  constructor(private productosSrv: ProductosService){ }

  ngOnInit() {
    this.productosSrv.getProductosRelacionados().subscribe((data) => {this.productosRelacionados = data.recipes; console.log(this.productosRelacionados)});

  }
  mostrar(producto: any){
    this.productosSrv.setProductosRelacionadosSeleccionado(producto);
  }
}
