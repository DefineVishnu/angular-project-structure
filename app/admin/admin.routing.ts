import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminURL } from './settings';
import { AdminGuard } from './admin.guard';


const routes: Routes = [

    { path: '', redirectTo: 'admin/masters', pathMatch: 'full' },
    {
        path:"",
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'masters', pathMatch: 'full' },
            {
                path: 'masters',
                loadChildren: 'app/admin/masters/masters.module/#MastersModule',
                canLoad: [AdminGuard]
            },
            {
                path: 'transactions',
                loadChildren: 'app/admin/transactions/transactions.module/#TransactionsModule',
                canLoad: [AdminGuard]
            }
        ]
    },

];

export const AdminRouting: ModuleWithProviders = RouterModule.forChild(routes)