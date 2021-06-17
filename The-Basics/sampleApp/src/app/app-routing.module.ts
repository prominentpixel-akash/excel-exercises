import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlankArrayComponent} from './blank-array/blank-array.component';
import {AngularDropdownComponent} from './angular-dropdown/angular-dropdown.component';
import {ParentComponent} from './parent/parent.component';
import {DirectivesComponent} from './directives/directives.component';
import {UserComponent} from './user/user.component';
import {AngularLifecycleComponent} from './angular-lifecycle/angular-lifecycle.component';
import {LoginComponent} from './login/login.component';

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
  {path: 'service', component: LoginComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
