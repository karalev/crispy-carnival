import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from './album';
import { AlbumsService } from './albums.service';


@Component({
  selector: 'my-albums',
  template: `
        <ul>
            <li *ngFor="let album of albums" class="album" (click)="gotoDetail(album)">
                
                    <p class="title">{{album.title}}</p>
                    <img class="thumb" src="{{album.thumbnail}}">
                
            </li>
        </ul>
 `
})
export class AlbumsComponent {
    viewBindings : [AlbumsService]
    albums: Album[];
    selectedAlbum: Album;

    constructor(
    private router: Router,
    private albumsService: AlbumsService,
    ref: ChangeDetectorRef) {
        ref.detach();
        setInterval(() => {
            ref.detectChanges();
        }, 0);
     }

    getAlbums(): void {
        this.albumsService.getAlbums().then(albums => this.albums = albums);
    }

    ngOnInit(): void {
        this.getAlbums();
    }

    gotoDetail(album :Album): void {
        
        this.router.navigate(['/photos', album.id]);
    }

}