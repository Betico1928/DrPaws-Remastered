import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {LoginAdministrativoComponent} from "./login-administrativo/login-administrativo.component";
import {DashboardVeterinarioComponent} from "./dashboard-veterinario/dashboard-veterinario.component";
import {CrearMascotaComponent} from "./crud-mascotas/crear-mascota/crear-mascota.component";
import {ModificarMascotaComponent} from "./crud-mascotas/modificar-mascota/modificar-mascota.component";
import {VisualizarMascotaComponent} from "./crud-mascotas/visualizar-mascota/visualizar-mascota.component";
import {PorqueNosotrosComponent} from "./porque-nosotros/porque-nosotros.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';
import {DashboardAdministradorComponent} from "./dashboard-administrador/dashboard-administrador.component";

const routes: Routes = [
  // Default route
  {path: '', pathMatch: 'full', redirectTo: 'home'},

  // Eagerly loaded routes
  {path: 'home', component: LandingPageComponent},
  {path: 'porque-nosotros', component: PorqueNosotrosComponent},
  {path: 'contacto', component: ContactoComponent},

  // Paths para iniciar sesión como veterinario o usuario
  {path: 'login-administrativo', component: LoginAdministrativoComponent},
  { path: 'loginUsuario', component: LoginAdministrativoComponent },

  {path: 'login-administrativo/dashboard-veterinarios', component: DashboardVeterinarioComponent},

  // Dashboard del administrador
  { path: 'dashboard-administrador', component: DashboardAdministradorComponent },

  // CRUD Mascotas:
  {path: 'login-administrativo/dashboard-veterinarios/crear-mascota', component: CrearMascotaComponent},
  {path: 'login-administrativo/dashboard-veterinarios/visualizar-mascota/:id', component: VisualizarMascotaComponent},
  {path: 'login-administrativo/dashboard-veterinarios/modificar-mascota/:id', component: ModificarMascotaComponent},

  // CRUD usuario
  { path: 'login-usuario/dashboard-usuario/:id', component: DashboardUsuarioComponent },
  { path: 'login-usuario/dashboard-usuario/:id/visualizar-mascota/:id', component: VisualizarMascotaComponent },

  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
