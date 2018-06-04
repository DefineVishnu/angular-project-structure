import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component } from './components/tab2/tab2.component';


const routes: Routes = [
    {
        path: '',
        component: TabsComponent,
        children: [
            { path: '', redirectTo: 'tab1', pathMatch: 'full' },
            { path: 'tab1', component: Tab1Component },
            { path: 'tab2', component: Tab2Component }

        ]
    },

];

export const TabsRouting: ModuleWithProviders = RouterModule.forChild(routes)