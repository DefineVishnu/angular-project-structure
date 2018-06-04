import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user/user.service';
import { AdminUserDetails } from './models/AdminUserDetails';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public userService: UserService,
  ) { }
  user: AdminUserDetails;

  ngOnInit() {
    this.getUserDetails()
  }

  getUserDetails() {
   // alert("hie")
    this.user = this.userService.getAdminUserDetails();
  }

}
