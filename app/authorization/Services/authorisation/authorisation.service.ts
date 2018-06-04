import { Injectable } from '@angular/core';
import { retriveItemFromStorage, addItemToStorage } from '../../../helpers/localstorage.helper';
import { LoginUser } from '../../models/LoginUser';
import { UserFunctions } from '../../UserFunctions';
import { UserDetails } from '../../models/UserDetails';

@Injectable()
export class AuthorisationService {

  constructor() { }


  verifyUserLogin(userLogin: LoginUser): boolean {
    //verify user name and password 
    //generally this action is  done by a http fuction
    //this.http
    if (userLogin.userName == 'vishnu' && userLogin.password == 'password') {
      
      let loggedInUserDetails:UserDetails=new UserDetails(1,'vishnukv','vishnu','kv','admin')
      UserFunctions.addUserDetailsToStorage(loggedInUserDetails)
      return true;
    }

    if (userLogin.userName == 'ranjith' && userLogin.password == 'password') {
      
      let loggedInUserDetails:UserDetails=new UserDetails(1,'ranjith','ranjith','ranjith','user')
      UserFunctions.addUserDetailsToStorage(loggedInUserDetails)
      return true;
    }
    return false;
  }

}
