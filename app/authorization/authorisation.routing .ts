import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guards';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: LoginComponent, canActivate: [LoginGuard] }
];

export const AuthRouting: ModuleWithProviders = RouterModule.forChild(routes)