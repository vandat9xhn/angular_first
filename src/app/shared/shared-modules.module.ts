import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//
import { BtnRoundedComponent } from '../_components/btn-rounded/btn-rounded.component';
import { LoginComponent } from '../_components/login/login.component';
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
        // Directives
        HighlightDirective,
        ToggleBoolDirective,
        UseMountedDirective,
        DynamicPropertiesDirective,
    ],
    imports: [CommonModule],
    exports: [
        // Components
        BtnRoundedComponent,
        LoginComponent,
        // Directives
        HighlightDirective,
        ToggleBoolDirective,
        UseMountedDirective,
        DynamicPropertiesDirective,
    ],
})
export class SharedModulesModule {}
