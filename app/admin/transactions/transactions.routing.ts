import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { TransactionsComponent } from './transactions.component';


const routes: Routes = [
    {
        path: '',
        component: TransactionsComponent,
        children: [
            { path: '', redirectTo: 'page1', pathMatch: 'full' },
            { path: 'page1', component: Page1Component },
            { path: 'page2', component: Page2Component },
            {
                path:'tabs',
                loadChildren: 'app/admin/transactions/tabs/tabs.module/#TabsModule',
            }
        ]
    },

];

export const TransactionRouting: ModuleWithProviders = RouterModule.forChild(routes)