import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './pages/class/class.component';
import { CoursesComponent } from './pages/courses/courses.component';
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
    path:'course',
    component: CoursesComponent,
  },
  {
    path:'class',
    component: ClassComponent,
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
