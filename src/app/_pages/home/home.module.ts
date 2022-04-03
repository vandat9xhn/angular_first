import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//
import { SharedModulesModule } from 'src/app/shared/shared-modules.module';
//
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
//

//
@NgModule({
    declarations: [HomeComponent],
    imports: [
        FormsModule,
        CommonModule,
        //
        SharedModulesModule,
        HomeRoutingModule,
    ],
})
export class HomeModule {}
