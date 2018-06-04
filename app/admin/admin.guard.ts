import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot, 
         CanActivateChild,
         CanLoad,
         Route} from '@angular/router';
import { UserService } from './services/user/user.service';


@Injectable()
export class AdminGuard implements CanLoad {


  constructor(public userService:UserService) {}
 
  canLoad(route: Route) {
   //  return this.userService.verifyAdminAuthorisation()
   return true;
  }


}