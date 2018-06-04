import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastersComponent } from './masters.component';
import { MasterFooterComponent } from './components/master-footer/master-footer.component';
import { Page1Component } from './components/page1/page1.component';
import { MastersRouting } from './masters.routing';
import { Page2Component } from './components/page2/page2.component';

@NgModule({
  imports: [
    CommonModule,
    MastersRouting
  ],
  declarations: [
    MastersComponent,
    MasterFooterComponent,
    Page1Component,
    Page2Component
  ]
})
export class MastersModule { }
