import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { AuthorizationModule } from './authorization/authorization.module';
import { AppRouteGuard } from './app-route.guards';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [AppRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
