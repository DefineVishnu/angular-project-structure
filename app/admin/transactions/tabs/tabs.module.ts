import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsRouting } from './tabs.routing';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { TabsComponent } from './tabs.component';

@NgModule({
  imports: [
    CommonModule,
    TabsRouting
  ],
  declarations: [TabsComponent,Tab1Component, Tab2Component]
})
export class TabsModule { }
