import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExeAngularComp} from './example-angular/example-angular';
import {UserExampleComponent} from './user-example/example-angular';
import {BlankArrayComponent} from './blank-array/blank-array.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularDropdownComponent} from './angular-dropdown/angular-dropdown.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {HeaderComponent} from './header/header.component';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './child/child.component';
import {DirectivesComponent} from './directives/directives.component';
import {UserComponent} from './user/user.component';
import {AngularLifecycleComponent} from './angular-lifecycle/angular-lifecycle.component';
import {StudentComponent} from './student/student.component';
import {LoginComponent} from './login/login.component';
import {JobPostComponent} from './router/job-post/job-post.component';
import {JobListComponent} from './router/job-list/job-list.component';
import {JobDetailsComponent} from './router/job-details/job-details.component';
import {JobsComponent} from './router/jobs/jobs.component';
import {RouterLoginComponent} from './router/router-login/router-login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {TemplateFormComponent} from './template-form/template-form.component';
import {ObservablesComponent} from './observables/observables.component';
import {HttpClientModule} from '@angular/common/http';
import { PipeTransformOutputComponent } from './pipe-transform-output/pipe-transform-output.component';
import {ReplacePipe} from './util/replace.pipe';
import { HttpRequestCreateUserComponent } from './http-request-create-user/http-request-create-user.component';
import { HttpRequestManageUserComponent } from './http-request-manage-user/http-request-manage-user.component';
import {MaskService} from './service/mask.service';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { AuthenticationRouteProtectionComponent } from './authentication-route-protection/authentication-route-protection.component';
import { AuthComponent } from './auth/auth.component';


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
    DirectivesComponent,
    UserComponent,
    AngularLifecycleComponent,
    StudentComponent,
    LoginComponent,
    JobPostComponent,
    JobListComponent,
    JobDetailsComponent,
    JobsComponent,
    RouterLoginComponent,
    PageNotFoundComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    ObservablesComponent,
    PipeTransformOutputComponent,
    ReplacePipe,
    HttpRequestCreateUserComponent,
    HttpRequestManageUserComponent,
    AuthenticationRouteProtectionComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  maskConfig: any;

  constructor() {
    this.maskConfig = MaskService.config;
  }
}
