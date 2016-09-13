import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }        from './app.component';
import { AlbumsComponent } from './albums.component';
import { PhotosComponent } from './photos.component'
import { AlbumsService } from './albums.service';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    AlbumsComponent,
    PhotosComponent
],
  providers: [
    AlbumsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}