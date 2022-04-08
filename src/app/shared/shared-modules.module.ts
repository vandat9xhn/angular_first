import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkPortalOutlet, PortalModule } from '@angular/cdk/portal';
//
import { BtnRoundedComponent } from '../_components/btn-rounded/btn-rounded.component';
import { LoginComponent } from '../_components/login/login.component';
import { PortalComponent } from '../_components/portal/portal.component';
//
import { DynamicPropertiesDirective } from '../_detectives/dynamic_properties/dynamic-properties.directive';
import { HighlightDirective } from '../_detectives/highlight/highlight.directive';
import { ToggleBoolDirective } from '../_detectives/toggle_bool/toggle-bool.directive';
import { UseMountedDirective } from '../_detectives/use_mounted/use-mounted.directive';

//
@NgModule({
    declarations: [
        // Components
        BtnRoundedComponent,
        LoginComponent,
        PortalComponent,
        // Directives
        HighlightDirective,
        ToggleBoolDirective,
        UseMountedDirective,
        DynamicPropertiesDirective,
    ],
    imports: [CommonModule, PortalModule],
    exports: [
        // Components
        BtnRoundedComponent,
        LoginComponent,
        PortalComponent,
        // Directives
        HighlightDirective,
        ToggleBoolDirective,
        UseMountedDirective,
        DynamicPropertiesDirective,
        // 
        CdkPortalOutlet
        //
    ],
})
export class SharedModulesModule {}
