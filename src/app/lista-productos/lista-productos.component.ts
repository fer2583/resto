import { Component, Input } from '@angular/core';
import { ProductosService } from '../productos/productos.service';
import { results } from '../productos.interface';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  @Input() platos!: results[];
  dataSource = this.platos

  constructor(public productosService: ProductosService) { }
  ngOnInit(): void {

  }

  verDetalle(platosA: results){
    this.productosService.enviar(platosA);
  }

}
