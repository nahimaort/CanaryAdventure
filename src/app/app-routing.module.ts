import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./tabs/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'lanzarote',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'gran-canaria',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'tenerife',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'la-gomera',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'la-palma',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'el-hierro',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'fuerteventura',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'la-graciosa',
    loadChildren: () => import('./tabs/island/island.module').then( m => m.IslandPageModule)
  },
    {
    path: 'edituserdata',
    loadChildren: () => import('./tabs/edituserdata/edituserdata.module').then( m => m.EdituserdataPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./tabs/favs/favs.module').then( m => m.FavsPageModule)
  },
  {
    path: 'initial',
    loadChildren: () => import('./tabs/initial/initial.module').then( m => m.InitialPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./tabs/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./tabs/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'initial',
    pathMatch: 'full'
  },
  {
    path: 'initial',
    loadChildren: () => import('./tabs/initial/initial.module').then(m => m.InitialPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./tabs/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./tabs/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs/tabs.module').then(m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
