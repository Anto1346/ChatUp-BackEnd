import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { NgModule } from "@angular/core";
import { LoginModule } from "./login/login.module";
import { ChatModule } from "./chat/chat.module";
import { RegisterModule } from './register/register.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule ({
    declarations: [],
    imports: [
        LoginModule,
        RegisterModule,
        ForgotPasswordModule,
        ChatModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        LoginModule,
        RegisterModule,
        ForgotPasswordModule,
        ChatModule,
        FormsModule,
        RouterModule
    ],
    providers: []
})

export class ComponentsModule {}
