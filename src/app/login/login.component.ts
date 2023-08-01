import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { userService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup

  constructor(private fb:FormBuilder, private router: Router,private http: HttpClient,
             public usuarioSrv: userService){

      this.loginForm = this.fb.group({
        email:['',[Validators.required, Validators.email]],
        contraseña: ['',Validators.required]
       })
  }

  ingresar(){
    const bodytest = { email: this.loginForm.value.email, password: this.loginForm.value.contraseña}
    this.usuarioSrv.login(bodytest).subscribe(data => { this.usuarioSrv.setToken(data.token);
      Swal.fire({position: 'top-end', icon: 'success', title: 'Bienvenido A la Carta',
               showConfirmButton: false, timer: 1800,});
    this.router.navigate(['/buscar']);
    this.usuarioSrv.getToken();

    }, (err: HttpErrorResponse)=>{
      if(err.status == 401){
        Swal.fire("Usuario y/o Contraseña incorrecto")
      }
    });

  };
}



  //ingresar(): any {
    //let bodytest = { email: this.loginForm.value.email, password: this.loginForm.value.contraseña}
    //this.http.post("http://challenge-react.alkemy.org", bodytest).subscribe(
    //(data: any) => {
      //localStorage.setItem('token', data.token);

        //if(localStorage.length != 0){
          //this.usuario = this.loginForm.value.email}
        //Swal.fire({position: 'top-end', icon: 'success', title: 'Bienvenido A la Carta' +" " + this.usuario,
          //        showConfirmButton: false, timer: 1800,});
        //this.router.navigate(['/buscar'])
        //},

          //(error: HttpErrorResponse)=> {
          //if(error.status == 401)
          //{ Swal.fire("Usuario y/o Contraseña incorrecto"),
            //console.log("ingrese usuario nuevamente")}
        //});

  //}


