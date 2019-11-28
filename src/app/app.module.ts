import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMomentumModule } from './app-momentum/app-momentum.module';
import { HomeComponent } from './pages/home/home.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { DrawersPageComponent } from './pages/drawers-page/drawers-page.component';
import { ModalWithFormComponent } from './pages/drawers-page/modal-with-form/modal-with-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersPageComponent,
    DrawersPageComponent,
    ModalWithFormComponent
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
