
import { Globals } from './globals.service';
import { Broadcaster } from './broadcaster';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

	loginSucc: boolean = false;

	constructor(
		private _router: Router,
		private _globals: Globals,
		private _broadcaster: Broadcaster
	) {}

  canActivate(route: ActivatedRouteSnapshot, 	state: RouterStateSnapshot): Observable<boolean> {
	return of(true);
  }

}
