import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMomentumModule } from './app-momentum/app-momentum.module';
import { HomeComponent } from './pages/home/home.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { TestmodalComponent } from './testmodal/testmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersPageComponent,
    TestmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMomentumModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [TestmodalComponent]
})
export class AppModule { }
