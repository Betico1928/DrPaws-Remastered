import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {LoginAdministrativoComponent} from "./login-administrativo/login-administrativo.component";
import {DashboardVeterinarioComponent} from "./dashboard-veterinario/dashboard-veterinario.component";

const routes: Routes = [
  // Default route
  {path: '', pathMatch: 'full', redirectTo: 'home'},

  // Eagerly loaded routes
  {path: 'home', component: LandingPageComponent},

  {path: 'login-administrativo', component: LoginAdministrativoComponent},
  {path: 'login-administrativo/dashboard-veterinarios', component: DashboardVeterinarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
