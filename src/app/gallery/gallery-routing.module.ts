import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery.component';
import { PreviewComponent } from './preview/preview.component';

let routes: Routes = [
  {path: 'gallery', component: GalleryComponent, children: [
    {path: 'preview', component: PreviewComponent}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GalleryRoutingModule {}
