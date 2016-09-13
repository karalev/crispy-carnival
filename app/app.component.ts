import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlbumsService } from './albums.service';

// <nav>
//         <a routerLink="/dashboard">Dashboard</a>
//         <a routerLink="/heroes">Heroes</a>
//       </nav>
//    <router-outlet></router-outlet>

@Component({
  selector: 'my-app',
  template: `
      <header>
          <div>
              <label for="idInput">User ID</label>
              <input type="text" maxlength="9" size="11" name="idInput" placeholder="7-9 numbers" #idInp>
              <button id="sendId" (click)="setId(idInp.value)">Send ID</button>
              <button (click)="backToMain()" >Go back to main</button>
          </div>
      </header>
      <router-outlet></router-outlet>
 `
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor(private router: Router, private albumsService: AlbumsService) { }
  idstrToSend :string;
  setId(idstr :string){
    if(idstr.length > 0){
      console.log(idstr);
      this.albumsService.clearAlbums();
      this.albumsService.setAlbums(idstr);
    }
  }
  backToMain(){
     this.router.navigate(['/']);
  }

  // test(){
  //   VK.Api.call('getVariable', 
  //   {key: 1281}, 
  //   function(r) {
  //       if(r.response) {
  //         console.log('Logged as: ' + r.response);
  //       }
  //   });
  //   VK.Api.call('photos.get', {
  //     owner_id: 223008811,
  //     album_id: 'profile'
  //   },
  //   function(data){
  //     if(data) {
  //       let i = Math.round(Math.random()*6);
  //       console.log(data)
  //       console.log(data.response[i].src);
  //       document.getElementById('olo').src = data.response[i].src_big;
  //     }
  //   });
  // }
}
