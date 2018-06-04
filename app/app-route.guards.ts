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
import { UserFunctions } from './authorization/UserFunctions';
import { AppURL } from './settings';


@Injectable()

/*
    check if user is loged in else redirect to login 
  redirects to login if not
*/
export class AppRouteGuard implements CanLoad {


    constructor(private router: Router) { }

    canLoad(route: Route) {
        //current  path on this module
        console.log(route)
        if (UserFunctions.RetriveUserDetails()) {
            return true;
        }
        this.router.navigate([''])
        return false;
    }


}