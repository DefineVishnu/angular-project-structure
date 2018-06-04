import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { TransactionRouting } from './transactions.routing';
import { TransactionsComponent } from './transactions.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    TransactionRouting
  ],
  declarations: [TransactionsComponent,
    Page1Component,
    Page2Component,
    
  ]
})
export class TransactionsModule { }
