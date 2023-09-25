import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {LoginAdministrativoComponent} from "./login-administrativo/login-administrativo.component";
import {DashboardVeterinarioComponent} from "./dashboard-veterinario/dashboard-veterinario.component";
import {CrearMascotaComponent} from "./crud-mascotas/crear-mascota/crear-mascota.component";

const routes: Routes = [
  // Default route
  {path: '', pathMatch: 'full', redirectTo: 'home'},

  // Eagerly loaded routes
  {path: 'home', component: LandingPageComponent},

  {path: 'login-administrativo', component: LoginAdministrativoComponent},
  {path: 'login-administrativo/dashboard-veterinarios', component: DashboardVeterinarioComponent},

  // CRUD Mascotas:
  {path: 'login-administrativo/dashboard-veterinarios/crear-mascota', component: CrearMascotaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
