import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//
import { SharedModulesModule } from 'src/app/shared/shared-modules.module';
import { RegisterPageRouting } from './register-page-routing.module';
import { RegisterPageComponent } from './register-page.component';
//

//
@NgModule({
    declarations: [RegisterPageComponent],
    imports: [
        CommonModule,
        FormsModule,
        // 
        SharedModulesModule,
        RegisterPageRouting,
    ],
})
export class RegisterPageModule {}
