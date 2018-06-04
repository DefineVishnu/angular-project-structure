import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MastersComponent } from './masters.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';


const routes: Routes = [
    {
        path: '',
        component: MastersComponent,
        children: [
            { path: '', redirectTo: 'page1', pathMatch: 'full' },
            { path: 'page1', component: Page1Component },
            { path: 'page2', component: Page2Component }

        ]
    },

];

export const MastersRouting: ModuleWithProviders = RouterModule.forChild(routes)