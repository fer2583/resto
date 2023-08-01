import {  inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { userService } from './user.service';
import Swal from 'sweetalert2';

export const AutorizacionGuard: CanActivateFn = () => {
  const router = inject(Router);
  const user = inject(userService);

  const token = user.token
    if(!token){
      router.navigate(["login"]);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Inicie sesion para poder acceder al contenido',
      })
      return false;

    }
    return true
  }


