import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginAdministrativoComponent } from './login-administrativo/login-administrativo.component';
import { DashboardVeterinarioComponent } from './dashboard-veterinario/dashboard-veterinario.component';
import { CrearMascotaComponent } from './crud-mascotas/crear-mascota/crear-mascota.component';
import { ModificarMascotaComponent } from './crud-mascotas/modificar-mascota/modificar-mascota.component';
import {ReactiveFormsModule} from "@angular/forms";
import { VisualizarMascotaComponent } from './crud-mascotas/visualizar-mascota/visualizar-mascota.component';
import { PorqueNosotrosComponent } from './porque-nosotros/porque-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginAdministrativoComponent,
    DashboardVeterinarioComponent,
    CrearMascotaComponent,
    ModificarMascotaComponent,
    VisualizarMascotaComponent,
    PorqueNosotrosComponent,
    ContactoComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
