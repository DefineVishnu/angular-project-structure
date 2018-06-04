import { Injectable } from '@angular/core';
import { AdminUserDetails } from '../../models/AdminUserDetails';
import { UserDetails } from '../../../authorization/models/UserDetails';
import { UserFunctions } from '../../../authorization/UserFunctions';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor(private router: Router) { }

  getAdminUserDetails(): AdminUserDetails {
    let currentUser: UserDetails = UserFunctions.RetriveUserDetails();
    let currentAdmin: AdminUserDetails =
      new AdminUserDetails(currentUser.userId,
        currentUser.firstName,
        currentUser.lastName,
        currentUser.userName,
        currentUser.userToken,
        currentUser.userToken
      );
    return currentAdmin;
  }


  verifyAdminAuthorisation(): boolean {
    let currentUser: UserDetails = UserFunctions.RetriveUserDetails();
    let currentAdmin: AdminUserDetails = new AdminUserDetails(currentUser.userId,
      currentUser.firstName,
      currentUser.lastName,
      currentUser.userName,
      currentUser.userToken,
      currentUser.userToken
    );
    if (currentAdmin.role == 'admin') {
      return true;
    }
    return false;
  }


  logoutUser() {
    UserFunctions.removeUserDetails();
    this.router.navigate([""]);
  }
}
