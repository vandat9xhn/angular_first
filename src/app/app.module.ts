import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
// import { CommonModule } from '@angular/common';
//
import { counterReducer } from './store/counter/reducer';
// 
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_pages/home/home.component';
import { LoginPageComponent } from './_pages/login-page/login-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './_pages/register-page/register-page.component';
import { BtnRoundedComponent } from './_components/btn-rounded/btn-rounded.component';
import { HighlightDirective } from './_detectives/highlight/highlight.directive';
import { ToggleBoolDirective } from './_detectives/toggle_bool/toggle-bool.directive';
import { UseMountedDirective } from './_detectives/use_mounted/use-mounted.directive';
import { DynamicPropertiesDirective } from './_detectives/dynamic_properties/dynamic-properties.directive';
// 

//
@NgModule({
    declarations: [
        AppComponent,
        // Detectives
        HighlightDirective,
        // Components
        LoginComponent,
        // Page
        LoginPageComponent,
        HomeComponent,
        RegisterPageComponent,
        BtnRoundedComponent,
        ToggleBoolDirective,
        UseMountedDirective,
        DynamicPropertiesDirective,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        // 
        AppRoutingModule,
        // 
        StoreModule.forRoot({ count_reducer_obj: counterReducer }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})

//
export class AppModule {}
