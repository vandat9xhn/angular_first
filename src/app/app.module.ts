import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
//
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_pages/home/home.component';
import { LoginPageComponent } from './_pages/login-page/login-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './_pages/register-page/register-page.component';
import { BtnRoundedComponent } from './_components/btn-rounded/btn-rounded.component';
import { HighlightDirective } from './_components/highlight/highlight.directive';

//
@NgModule({
    declarations: [
        AppComponent,
        // Components
        LoginComponent,
        // Page
        LoginPageComponent,
        HomeComponent,
        RegisterPageComponent,
        BtnRoundedComponent,
        HighlightDirective,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})

//
export class AppModule {}
