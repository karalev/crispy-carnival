import { Album, Photo } from './album';
import { Injectable } from '@angular/core';

var ALBUMS: Album[] = [];

@Injectable()
export class AlbumsService {
    setAlbums(id:string) :void{
        VK.Api.call('photos.getAlbums', 
        {
            owner_id: +id,
            need_covers: 1,
            need_system: 1
        }, 
        function(r) {
            
            console.log( r );
            if(r.response) {
                console.log( r.response);
                for(var i = 0; i < r.response.length; i++){
                    let newAlbum = new Album();
                    newAlbum.id = r.response[i].aid;
                    newAlbum.title = r.response[i].title;
                    newAlbum.thumbnail = r.response[i].thumb_src;
                    newAlbum.photos = [];
                    VK.Api.call('photos.get',{
                        owner_id: +id,
                        album_id: r.response[i].aid,
                        extended: 1,
                    },
                    function(resp){
                        console.log( resp );
                        for(var i = 0; i < resp.response.length; i++){
                            newAlbum.photos.push(
                                {
                                   description: resp.response[i].text,
                                   src: resp.response[i].src_big,
                                   likes: 100
                                }
                            )
                        }
                    });
                    ALBUMS.push(newAlbum);
                }
            }
        });
    }
    getAlbums(): Promise<Album[]> {
        return Promise.resolve(ALBUMS);
    }
    getAlbum(id: number) :Promise<Album> {
        return this.getAlbums()
                .then(albums => albums.find(album => album.id === id));
    }
    clearAlbums():void{
        ALBUMS.length = 0;
    }
}
