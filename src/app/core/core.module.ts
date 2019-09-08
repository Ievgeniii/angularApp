import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from '../app-routing.module';

import { ImageService } from '../gallery/image-storage.service';
import { UserService } from '../users/user-service';

@NgModule({
  declarations: [
    NavbarComponent,
    HomepageComponent
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    NavbarComponent
  ],
  providers: [
    ImageService,
    UserService
  ]
})
export class CoreModule {}
