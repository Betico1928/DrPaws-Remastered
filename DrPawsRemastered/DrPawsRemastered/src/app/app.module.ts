import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginAdministrativoComponent } from './logins/login-administrativo/login-administrativo.component';
import { DashboardVeterinarioComponent} from "./dashboards/dashboard-veterinario/dashboard-veterinario.component";
import { CrearMascotaComponent } from './cruds/crud-mascotas/crear-mascota/crear-mascota.component';
import { ModificarMascotaComponent } from './cruds/crud-mascotas/modificar-mascota/modificar-mascota.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { VisualizarMascotaComponent } from './cruds/crud-mascotas/visualizar-mascota/visualizar-mascota.component';
import { PorqueNosotrosComponent } from './paginas-adicionales/porque-nosotros/porque-nosotros.component';
import { ContactoComponent } from './paginas-adicionales/contacto/contacto.component';
import { ErrorPageComponent } from './paginas-adicionales/error-page/error-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { DashboardUsuarioComponent } from './dashboards/dashboard-usuario/dashboard-usuario.component';
import { LoginUsuarioComponent } from './logins/login-usuario/login-usuario.component';
import { DashboardAdministradorComponent } from './dashboards/dashboard-administrador/dashboard-administrador.component';
import { CrearVeterinarioComponent } from './cruds/crud-veterinario/crear-veterinario/crear-veterinario.component';
import { ModificarVeterinarioComponent } from './cruds/crud-veterinario/modificar-veterinario/modificar-veterinario.component';
import { VisualizarVeterinarioComponent } from './cruds/crud-veterinario/visualizar-veterinario/visualizar-veterinario.component';
import { AsignarTratamientoComponent } from './tratamientos/asignar-tratamiento/asignar-tratamiento.component';
import { EstadisticasDeLaVeterinariaComponent } from './dashboards/dashboard-administrador/estadisticas-de-la-veterinaria/estadisticas-de-la-veterinaria.component';
import { CrearUsuarioComponent } from './cruds/crud-usuario/crear-usuario/crear-usuario.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { AuthInterceptor } from './helpers/auth.interceptor';

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
    ErrorPageComponent,
    DashboardUsuarioComponent,
    LoginUsuarioComponent,
    DashboardAdministradorComponent,
    CrearVeterinarioComponent,
    ModificarVeterinarioComponent,
    VisualizarVeterinarioComponent,
    AsignarTratamientoComponent,
    EstadisticasDeLaVeterinariaComponent,
    CrearUsuarioComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
