import { Component, OnInit } from '@angular/core';
import { AdminUserDetails } from '../../models/AdminUserDetails';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(
    public userService: UserService,
  ) { }
  user: AdminUserDetails;

  ngOnInit() {
    this.getUserDetails()
  }

  getUserDetails() {
    this.user = this.userService.getAdminUserDetails();
  }
}
