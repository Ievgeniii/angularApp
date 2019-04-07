import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {

  constructor(private ajax: HttpClient) {}

  getImages() {
    return this.ajax.get('https://restcountries.eu/rest/v2/all');
  }

}