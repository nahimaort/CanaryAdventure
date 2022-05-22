import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'edituserdata',
        loadChildren: () => import('../edituserdata/edituserdata.module').then( m => m.EdituserdataPageModule)
      },
      {
        path: 'favourites',
        loadChildren: () => import('../favs/favs.module').then( m => m.FavsPageModule)
      },
      {
        path: 'lanzarote',
        loadChildren: () => import('../island/island.module').then( m => m.IslandPageModule)
      },
      {
        path: 'gran-canaria',
        loadChildren: () => import('../island/island.module').then( m => m.IslandPageModule)
      },
      {
        path: 'tenerife',
        loadChildren: () => import('../island/island.module').then( m => m.IslandPageModule)
      },
      {
        path: 'la-gomera',
        loadChildren: () => import('../island/island.module').then( m => m.IslandPageModule)
      },
      {
        path: 'la-palma',
        loadChildren: () => import('../island/island.module').then( m => m.IslandPageModule)
      },
      {
        path: 'el-hierro',
        loadChildren: () => import('../island/island.module').then( m => m.IslandPageModule)
      },
      {
        path: 'fuerteventura',
        loadChildren: () => import('../island/island.module').then( m => m.IslandPageModule)
      },
      {
        path: 'la-graciosa',
        loadChildren: () => import('../island/island.module').then( m => m.IslandPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
