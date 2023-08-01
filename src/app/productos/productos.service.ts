import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { results } from "../productos.interface";

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private productosUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=535a1fcc3a2347939b07a1d7e72cf924&query=';
  private productosUrlFinal = '&addRecipeInformation=true&number=12';
  private productosRelacionadosUrl = 'https://api.spoonacular.com/recipes/random?apiKey=535a1fcc3a2347939b07a1d7e72cf924&addRecipeInformation=true&number=4';

  listaProductos:results[] = [];
  total: any;
  healthCare: any;
  tiempo: any;
  plato: any;

  private clientes$ = new BehaviorSubject<results[]>([]);
  getClientes$(): Observable<results[]> {
    return this.clientes$.asObservable();
  }


  private platoSeleccionado: BehaviorSubject<results> = new BehaviorSubject<any>({});
  private totalPedido: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private health: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private time: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private productoRelacionadoSeleccionado: BehaviorSubject<results|null> = new BehaviorSubject<results|null>(null);

  get productoRelacionadoSeleccionado$(): Observable<results|null>{
    return this.productoRelacionadoSeleccionado.asObservable();
  }

  setProductosRelacionadosSeleccionado(producto: results | null){
    this.productoRelacionadoSeleccionado.next(producto);
  }

  get platoSeleccionado$(): Observable<any>{
    return this.platoSeleccionado.asObservable();
 }

  set PlatoSeleccionado(plato: results){
     this.platoSeleccionado.next(plato)
  }

  get totalPedido$(): Observable<any>{
    return this.totalPedido.asObservable();
 }

  get health$(): Observable<any>{
    return this.health.asObservable();
  }

  get time$(): Observable<any>{
   return this.time.asObservable();
  }

  agregarProducto(platoA: any) {
    this.listaProductos.push(platoA);
    this.clientes$.next(this.listaProductos);

  }

  enviar(platosA:any) {
    this.platoSeleccionado.next(platosA);
  }

  constructor(private http: HttpClient) { }

  getProductos(urlParam?: any): Observable<any>{
    let urlX: string;
    if(urlParam){
      urlX = this.productosUrl + urlParam + this.productosUrlFinal
    } else {
      urlX = this.productosUrl + 'pasta' + this.productosUrlFinal
    }
  return  this.http.get(urlX);
  }

  getProductosRelacionados(): Observable<any>{
    const url = this.productosRelacionadosUrl;
    return this.http.get(url)
  }

  eliminar(_id: number){
    const indice = this.listaProductos.findIndex(p => p.id === _id);

    if (indice != -1) {
     this.listaProductos.splice(indice, 1);
     this.healthCare = this.promedio();
     this.tiempo = this.preparacion();
     this.total = this.sumas();
     this.clientes$.next(this.listaProductos)
     console.log("Carrito", this.listaProductos);
     }
    };

   sumas(): void{
    const totales = this.listaProductos.reduce((acc, prod)=> acc += prod.pricePerServing, 0)
    this.totalPedido.next(totales)
    console.log("Costo Total",totales)
   }

   promedio(){
    const promedio = this.listaProductos.reduce((acc, prom) => (acc += prom.healthScore/this.listaProductos.length), 0)
    this.health.next(promedio)
    console.log("HealthScore Promedio", promedio);
   }

   preparacion(){
    const promedio = this.listaProductos.reduce((acc, time) => (acc += time.readyInMinutes/this.listaProductos.length), 0)
    this.time.next(promedio)
    console.log("Tiempo Promedio", promedio);
   }

   vaciarCarrito(){
    this.listaProductos = []
   }

}


// API Key: 23caeee5df5a43c196188454fae75298  (fernando)

// API Key: 86d96ddd73ed485b8a6bea05a0b8e116   (fam)

// API Key: 535a1fcc3a2347939b07a1d7e72cf924  (daniela)
