import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlankArrayComponent} from './blank-array/blank-array.component';
import {AngularDropdownComponent} from './angular-dropdown/angular-dropdown.component';
import {ParentComponent} from './parent/parent.component';
import {DirectivesComponent} from './directives/directives.component';

const routes: Routes = [
  {path: 'array', component: BlankArrayComponent},
  {path: 'dropdown', component: AngularDropdownComponent},
  {path: 'parent', component: ParentComponent},

  {path: 'directives', component: DirectivesComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
