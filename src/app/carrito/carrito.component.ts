import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { results } from '../productos.interface';
import { ProductosService } from '../productos/productos.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { userService } from '../user.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
displayedColumns: string[] = ['Plato', 'HealthScore', 'Preparación', 'Vegetariano', 'Costo', 'Eliminar']
carrito: results[] = []

clientes$: Observable<results[]>;

constructor(public productosSrv: ProductosService, private router: Router, private userSrv:userService) {
this.clientes$ = this.productosSrv.getClientes$()
this.clientes$.subscribe(data => this.carrito = data,)

}

ngOnInit() {
  this.clientes$.subscribe(data => this.carrito = data,), console.log(this.carrito,"lo nuevo")
  this.productosSrv.sumas(),
  this.productosSrv.promedio(),
  this.productosSrv.preparacion(),
  this.productosSrv.eliminar
}

confirma(){
   // Realizar validaciones del carrito
   if (!this.validarCarrito()) {
    return; // Detener la confirmación si las validaciones no se cumplen
  }
  Swal.fire({
    title: '¿Esta seguro/a de confirmar el menú?',
    text: "Recuerde que no podra modificar el pedido",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Confirmado!',
        'Su pedido ha sido procesado, gracias por su compra',
        'success'
      ).then(),this.router.navigate(["login"]), this.userSrv.logout(), this.productosSrv.vaciarCarrito();
    }
  })


}
validarCarrito(): boolean {
  // Contadores de productos vegetarianos y no vegetarianos
  let vegetarianos = 0;
  let noVegetarianos = 0;

  // Recorrer la lista de productos en el carrito
  for (const producto of this.carrito) {
    if (producto.vegetarian) {
      vegetarianos++;
    } else {
      noVegetarianos++;
    }
  }

  // Realizar las validaciones
  if (vegetarianos < 2 || noVegetarianos < 2) {
    // Mostrar mensajes de error
    if (vegetarianos < 2) {
      Swal.fire({
        title: 'Error',
        text: 'Debe haber al menos dos productos vegetarianos en el carrito.',
        icon: 'error'
      });
    }
    if (noVegetarianos < 2) {
      Swal.fire({
        title: 'Error',
        text: 'Debe haber al menos dos productos no vegetarianos en el carrito.',
        icon: 'error'
      });
    }
    return false; // Las validaciones no se cumplen
  }

  return true; // Las validaciones se cumplen
}

}





