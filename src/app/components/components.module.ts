import { NgModule } from "@angular/core";
import { ButtomComponent } from "./buttom/buttom.component";
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        ButtomComponent,
        InputComponent
    ],
    exports: [
        ButtomComponent,
        InputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
  })
  export class ComponentsModule { }