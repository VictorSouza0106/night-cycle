import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenseComponent } from './pages/license/license.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'license',
    component: LicenseComponent,
  },
  {
    path:'**',
    component: LicenseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
