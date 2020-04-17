import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Globals, AuthGuard, Broadcaster} from '../../common';
import { Subject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class AdminGuard implements CanActivate {

  isAdmin = false;
  constructor(
    private authGuard: AuthGuard
    ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const subscription = new Subject<boolean>();
    this.authGuard.canActivate(route, state)
    .pipe(finalize(() => {
      subscription.next(this.isAdmin);
      subscription.complete();
    }))
    .subscribe((auth: boolean) => {
      if (auth){
            this.isAdmin = true;
      }});
    return subscription;
  }
}
