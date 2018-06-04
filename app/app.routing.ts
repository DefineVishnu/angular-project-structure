import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './authorization/login/login.component';
import { AppURL } from './settings';
import { AppRouteGuard } from './app-route.guards';


const routes: Routes = [
    // { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: AppURL.Authorisation,
        loadChildren: 'app/authorization/authorization.module#AuthorizationModule'
    },
    {
        path: AppURL.Admin,
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [AppRouteGuard]
    }



];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);