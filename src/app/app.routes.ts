import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'album',
    loadComponent: () => import('./album/album.page').then( m => m.AlbumPage)
  },
{
    path: 'account',
    loadComponent: () => import('./account/account.page').then( m => m.AccountPage)
  },
  {
    path: 'song-storage',
    loadComponent: () => import('./song-storage/song-storage.page').then( m => m.SongStoragePage)
  },

];

