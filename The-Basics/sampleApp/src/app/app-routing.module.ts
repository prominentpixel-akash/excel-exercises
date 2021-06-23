import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlankArrayComponent} from './blank-array/blank-array.component';
import {AngularDropdownComponent} from './angular-dropdown/angular-dropdown.component';
import {ParentComponent} from './parent/parent.component';
import {DirectivesComponent} from './directives/directives.component';
import {UserComponent} from './user/user.component';
import {AngularLifecycleComponent} from './angular-lifecycle/angular-lifecycle.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './router/header/header.component';
import {JobsComponent} from './router/jobs/jobs.component';
import {JobPostComponent} from './router/job-post/job-post.component';
import {JobListComponent} from './router/job-list/job-list.component';
import {JobDetailsComponent} from './router/job-details/job-details.component';
import {RouterLoginComponent} from './router/router-login/router-login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {TemplateFormComponent} from './template-form/template-form.component';
import {ObservablesComponent} from './observables/observables.component';
import {PipeTransformOutputComponent} from './pipe-transform-output/pipe-transform-output.component';
import {HttpRequestManageUserComponent} from './http-request-manage-user/http-request-manage-user.component';
import {HttpRequestCreateUserComponent} from './http-request-create-user/http-request-create-user.component';

const routes: Routes = [

  // The Basic
  {path: 'array', component: BlankArrayComponent},
  {path: 'dropdown', component: AngularDropdownComponent},

  // Components & Databinding Deep Dive
  {path: 'parent', component: ParentComponent},
  {path: 'user', component: UserComponent},
  {path: 'life-cycle', component: AngularLifecycleComponent},

  // Directives Deep Dive
  {path: 'directives', component: DirectivesComponent},

  // Using Services & Dependency Injection
  {path: 'service', component: LoginComponent},

  // Understanding Observables


  // Handling Forms in Angular Apps
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'template-form', component: TemplateFormComponent},

  // observables
  {path: 'observables', component: ObservablesComponent},

  // Using Pipes to Transform Output
  {path: 'pipe', component: PipeTransformOutputComponent},

  // Making Http Requests
  {path: 'manage-http-user', component: HttpRequestManageUserComponent},
  {path: 'create-http-user', component: HttpRequestCreateUserComponent},

  // Router
  {path: 'router-header', component: HeaderComponent},
  {path: 'router-login', component: RouterLoginComponent},
  {
    path: 'job', component: JobsComponent, children: [
      {path: 'job-post', component: JobPostComponent},
      {path: 'job-list', component: JobListComponent},
      {path: 'job-detail/:id', component: JobDetailsComponent}
    ]
  },
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
