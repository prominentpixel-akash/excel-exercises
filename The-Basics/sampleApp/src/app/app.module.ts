import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ExeAngularComp} from './example-angular/example-angular';
import {UserExampleComponent} from './user-example/example-angular';
import { BlankArrayComponent } from './blank-array/blank-array.component';
import {FormsModule} from '@angular/forms';
import { AngularDropdownComponent } from './angular-dropdown/angular-dropdown.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ExeAngularComp,
    UserExampleComponent,
    BlankArrayComponent,
    AngularDropdownComponent,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
