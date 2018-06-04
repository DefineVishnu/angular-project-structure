import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthorisationService } from './Services/authorisation/authorisation.service';
import { AuthRouting } from './authorisation.routing ';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './guards/login.guards';

@NgModule({
  imports: [
    CommonModule,
    AuthRouting,
    FormsModule
  ],
  providers:[
    AuthorisationService,
    LoginGuard
  ],
  declarations: [LoginComponent]
})
export class AuthorizationModule { }
