import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums.component';
import { PhotosComponent } from './photos.component';


const appRoutes: Routes = [
    {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
    {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'photos/:id',
    component: PhotosComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);