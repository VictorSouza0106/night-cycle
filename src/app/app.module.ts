import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './pages/login/login.component';
import { LicenseComponent } from './pages/license/license.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ClassComponent } from './pages/class/class.component';
import { HomeComponent } from './pages/home/home.component';

// MATERIAL IMPORTS

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LicenseComponent,
    CoursesComponent,
    ClassComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
