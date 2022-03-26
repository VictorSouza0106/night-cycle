import { NgModule } from "@angular/core";
import { ButtomComponent } from "./buttom/buttom.component";
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ExpanelPanelComponent } from './expanel-panel/expanel-panel.component';


@NgModule({
    declarations: [
        ButtomComponent,
        InputTextComponent,
        ExpanelPanelComponent
    ],
    exports: [
        ButtomComponent,
        InputTextComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
  })
  export class ComponentsModule { }