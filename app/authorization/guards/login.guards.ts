import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    CanLoad,
    Route,
    Router
} from '@angular/router';
import { UserFunctions } from '../UserFunctions';
import { AppURL } from '../../settings';


@Injectable()

/*

checks user  has token else
  redirects to login if not
*/
export class LoginGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!UserFunctions.RetriveUserDetails()) {
            return true;
        }
        this.router.navigate([AppURL.Admin+'/masters']);
        return false;

    }




}