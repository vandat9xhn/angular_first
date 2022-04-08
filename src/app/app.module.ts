import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
//
import { counterReducer } from './store/counter/reducer';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModulesModule } from './shared/shared-modules.module';

//

//
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        //
        AppRoutingModule,
        SharedModulesModule,
        //
        StoreModule.forRoot({ count_reducer_obj: counterReducer }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})

//
export class AppModule {}
