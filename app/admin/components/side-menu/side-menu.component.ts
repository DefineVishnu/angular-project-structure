import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }
  logOut() {
    alert("log out")
    this.user.logoutUser()
  }
}
