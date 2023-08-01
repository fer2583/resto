import { Component } from '@angular/core';
import { ProductosService } from '../productos/productos.service';
import { userService } from '../user.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  cantidad: any
  loggeado: any

constructor(public productosSrv: ProductosService, public userSrv: userService){
  this.cantidad = this.productosSrv.listaProductos.length
  this.loggeado = this.userSrv.getToken()
}
ngOnInit(){


}
}


