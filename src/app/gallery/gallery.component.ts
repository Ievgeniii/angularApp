import { Component } from '@angular/core';
import { ImageService } from './image-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images;

  constructor(private imgService: ImageService,
              private router: Router,
              private route: ActivatedRoute) { }

  loadImages() {
    this.imgService.getImages().subscribe(
      (response) => {
        this.images = response;
        console.log(response);
      },
      (error) => console.log(error)
    );

    this.router.navigate(['preview'], {relativeTo: this.route});
  }

}
