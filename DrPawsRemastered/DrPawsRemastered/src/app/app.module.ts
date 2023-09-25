import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginAdministrativoComponent } from './login-administrativo/login-administrativo.component';
import { DashboardVeterinarioComponent } from './dashboard-veterinario/dashboard-veterinario.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginAdministrativoComponent,
    DashboardVeterinarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
