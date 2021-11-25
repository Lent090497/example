import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementUserComponent } from './management-user/management-user.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementUserComponent
  },
  {
    path: '',
    loadChildren: ()=> import('./management-user/management-user.module').then(m=>m.ManagementUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
