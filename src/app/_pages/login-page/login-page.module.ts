import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//
import { SharedModulesModule } from 'src/app/shared/shared-modules.module';
//
import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
//

//
@NgModule({
    declarations: [LoginPageComponent],
    imports: [
        CommonModule,
        FormsModule,
        // 
        SharedModulesModule,
        LoginPageRoutingModule,
    ],
})
export class LoginPageModule {}
