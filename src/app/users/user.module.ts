import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { UsersComponent } from './users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule {}
