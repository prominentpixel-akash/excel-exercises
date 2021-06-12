import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ExeAngularComp} from './example-angular/example-angular';
import {UserExampleComponent} from './user-example/example-angular';

@NgModule({
  declarations: [
    AppComponent,
    ExeAngularComp,
    UserExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
