import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ForgotPasswordComponent } from "./forgot-password.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule ({
    declarations: [ ForgotPasswordComponent ],
    imports: 
    [ 
        CommonModule,
        FormsModule,
        RouterModule
     ],
    exports: [ ForgotPasswordComponent ],
    providers: [],
})

export class ForgotPasswordModule{}
