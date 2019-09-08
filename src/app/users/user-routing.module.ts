import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent, children: [
    {path: 'createuser', component: CreateUserComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}
