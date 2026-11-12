import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Loggingservice } from './loggingservice';

export const authGuard: CanActivateFn = (route, state) => {
  const loggingservice=inject(Loggingservice);
  const router=inject(Router);
  return loggingservice.islogged.value?true:router.createUrlTree(['login']);
};
