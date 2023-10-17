import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {LoginAdministrativoComponent} from "./logins/login-administrativo/login-administrativo.component";
import {DashboardVeterinarioComponent} from "./dashboards/dashboard-veterinario/dashboard-veterinario.component";
import {CrearMascotaComponent} from "./cruds/crud-mascotas/crear-mascota/crear-mascota.component";
import {ModificarMascotaComponent} from "./cruds/crud-mascotas/modificar-mascota/modificar-mascota.component";
import {VisualizarMascotaComponent} from "./cruds/crud-mascotas/visualizar-mascota/visualizar-mascota.component";
import {PorqueNosotrosComponent} from "./paginas-adicionales/porque-nosotros/porque-nosotros.component";
import {ContactoComponent} from "./paginas-adicionales/contacto/contacto.component";
import {ErrorPageComponent} from "./paginas-adicionales/error-page/error-page.component";
import {LoginUsuarioComponent} from "./logins/login-usuario/login-usuario.component";
import {DashboardUsuarioComponent} from "./dashboards/dashboard-usuario/dashboard-usuario.component";
import {DashboardAdministradorComponent} from "./dashboards/dashboard-administrador/dashboard-administrador.component";
import {CrearVeterinarioComponent} from "./cruds/crud-veterinario/crear-veterinario/crear-veterinario.component";
import {ModificarVeterinarioComponent} from "./cruds/crud-veterinario/modificar-veterinario/modificar-veterinario.component";
import {VisualizarVeterinarioComponent} from "./cruds/crud-veterinario/visualizar-veterinario/visualizar-veterinario.component";
import {AsignarTratamientoComponent} from "./tratamientos/asignar-tratamiento/asignar-tratamiento.component";

const routes: Routes = [
  // Default route
  {path: '', pathMatch: 'full', redirectTo: 'home'},

  // Eagerly loaded routes
  {path: 'home', component: LandingPageComponent},
  {path: 'porque-nosotros', component: PorqueNosotrosComponent},
  {path: 'contacto', component: ContactoComponent},

  {path: 'login-usuario', component: LoginUsuarioComponent},
  {path: 'login-usuario/dashboard-usuario/:id', component: DashboardUsuarioComponent},

  {path: 'login-administrativo', component: LoginAdministrativoComponent},
  {path: 'login-administrativo/dashboard-veterinarios/:id', component: DashboardVeterinarioComponent},
  {path: 'login-administrativo/dashboard-administrador', component: DashboardAdministradorComponent},

  {path: 'login-administrativo/dashboard-veterinarios/asignar-tratamiento/:idVeterinario/:idMascota', component: AsignarTratamientoComponent},

  // CRUD Veterinarios:
  {path: 'login-administrativo/dashboard-administrador/crear-veterinario', component: CrearVeterinarioComponent},
  {path: 'visualizar-veterinario/:id', component: VisualizarVeterinarioComponent},
  {path: 'login-administrativo/dashboard-administrador/modificar-veterinario/:id', component: ModificarVeterinarioComponent},

  // CRUD Mascotas:
  {path: 'login-administrativo/dashboard-veterinarios/crear-mascota', component: CrearMascotaComponent},
  {path: 'visualizar-mascota/:id', component: VisualizarMascotaComponent},
  {path: 'login-administrativo/dashboard-veterinarios/modificar-mascota/:idMascota/:idVeterinario', component: ModificarMascotaComponent},


  // Error:
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
