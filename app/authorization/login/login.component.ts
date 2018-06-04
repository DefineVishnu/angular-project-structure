import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../Services/authorisation/authorisation.service';
import { LoginUser } from '../models/LoginUser';
import { Router } from '@angular/router';
import { Navigate_To_Admin } from '../settings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authorisation:AuthorisationService,
    private  router:Router
  
  ) { }
  loginUser:LoginUser= new LoginUser(null,null);
  ngOnInit() {
  }

  userLogin(){
   let userLoginSucess= this.authorisation.verifyUserLogin(this.loginUser);

   if(userLoginSucess){
     alert("Sucess")
     this.router.navigate([Navigate_To_Admin])
   }
   else {
     alert("Login Failed")
   }
  }

  }


