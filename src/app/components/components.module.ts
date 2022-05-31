import { NgModule } from "@angular/core";
import { ButtomComponent } from "./buttom/buttom.component";
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ExpansionPanelComponent } from "./expansion-panel/expansion-panel.component";
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { NgxPayPalModule } from "ngx-paypal";
import {MatDialogModule} from '@angular/material/dialog';
import { TranslatePipe } from "../pipes/translate.pipe";


@NgModule({
    declarations: [
        ButtomComponent,
        InputTextComponent,
        ExpansionPanelComponent,
        PaymentDialogComponent
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
        NgxPayPalModule,
        MatDialogModule
    ],
    providers: [
        TranslatePipe
    ],
  })
  export class ComponentsModule { }