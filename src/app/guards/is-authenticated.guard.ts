import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  

  return inject(AuthService).isLoggedIn
  
};
