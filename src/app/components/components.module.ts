import { NgModule } from "@angular/core";
import { ButtomComponent } from "./buttom/buttom.component";
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ExpansionPanelComponent } from "./expansion-panel/expansion-panel.component";


@NgModule({
    declarations: [
        ButtomComponent,
        InputTextComponent,
        ExpansionPanelComponent
    ],
    exports: [
        ButtomComponent,
        InputTextComponent,
        ExpansionPanelComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
  })
  export class ComponentsModule { }