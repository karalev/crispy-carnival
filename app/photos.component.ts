import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Album } from './album';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'my-photos',
  template:`
    <ul *ngIf="photos" [class.blured]="selectedPhoto">
        <li *ngFor="let photo of photos" class="album photo" (click)="onSelect(photo)">
            <img class="photo" src="{{photo.src}}">
            <p class="likes">Likes: {{photo.likes}}</p>
        </li>
    </ul>
    <div *ngIf="selectedPhoto" class="modal">
            <button id="close" (click)="closeModal()">X</button>
            <img src="{{selectedPhoto.src}}">
            <p class="description">{{selectedPhoto.description}}</p>
            <p class="likes">Likes: {{selectedPhoto.likes}}</p>
    </div>
  `
  ,
})
export class PhotosComponent implements OnInit {
    photos: [{}];
    album: Album;
    selectedPhoto :{}

  constructor(
    private albumService: AlbumsService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.albumService.getAlbum(id)
        .then(album => this.photos = album.photos);
    });
  }
  onSelect(photo: {}): void {
      console.log(photo);
    this.selectedPhoto = photo;
  }
  closeModal() :void{
      console.log(this.selectedPhoto);
      this.selectedPhoto = false;
      console.log(this.selectedPhoto);
  }
  
}