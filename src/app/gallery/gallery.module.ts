import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryComponent } from './gallery.component';
import { PreviewComponent } from './preview/preview.component';
import { GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
  declarations: [
    GalleryComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule {}
