import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//
const HomeComponent = () =>
    import('./_pages/home/home.module').then((m) => m.HomeModule);
const LoginPageComponent = () =>
    import('./_pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
    );
const RegisterPageComponent = () =>
    import('./_pages/register-page/register-page.module').then(
        (m) => m.RegisterPageModule
    );

//
const routes: Routes = [
    { path: 'home', loadChildren: HomeComponent },
    { path: 'login', loadChildren: LoginPageComponent },
    { path: 'register', loadChildren: RegisterPageComponent },
    //
    { path: '**', redirectTo: 'home', pathMatch: 'prefix' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
