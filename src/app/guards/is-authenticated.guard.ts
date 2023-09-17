import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  
  const router = inject( Router );
  const authService = inject(AuthService);

  authService.isLoggedIn.subscribe(val => {
    if (val === false){
      router.navigate(['/login'])
    }
  })

  return inject(AuthService).isLoggedIn
  
};
