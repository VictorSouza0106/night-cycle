import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { TawkService } from './services/tawk.service';
import { NgxPayPalModule } from 'ngx-paypal';
import {MatMenuModule} from '@angular/material/menu';
import { TranslateModule } from './pipes/translate.module';
import { TranslateService } from './services/translate.service';

export function setupTranslateFactory(
  service: TranslateService): any {
  return () => service.use('pt-Br');
}

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
    NgxPayPalModule,
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    ComponentsModule,
    ReactiveFormsModule,
    MatMenuModule,
    TranslateModule
  ],
  providers: [
    TranslateService, {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    },
    TawkService,
    TranslateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
