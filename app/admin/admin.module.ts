import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { AdminRouting } from './admin.routing';
import { AdminGuard } from './admin.guard';
import { MastersModule } from './masters/masters.module';
import { UserService } from './services/user/user.service';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsModule } from './transactions/transactions.module';

@NgModule({
  imports: [
    CommonModule,
    MastersModule,
    TransactionsModule,
    AdminRouting
  ],

  declarations: [
    AdminComponent,
    SideMenuComponent,
    TopMenuComponent,
    

  ],
  providers:[
    AdminGuard,
    UserService
  ]
})
export class AdminModule { }
