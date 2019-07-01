import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMomentumModule } from './app-momentum/app-momentum.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMomentumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
