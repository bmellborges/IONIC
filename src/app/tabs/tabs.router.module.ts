import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'listPlayer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/list-player/list-player.module').then(m => m.ListPlayerPageModule)
          }
        ]
      },
      {
        path: 'perfilPlayer/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/perfil-player/perfil-player.module').then(m => m.PerfilPlayerPageModule)
          }
        ]
      },
      {
        path: 'listGame',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/list-game/list-game.module').then(m => m.ListGamePageModule)
          }
        ]
      },
      {
        path: 'perfilGame/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/perfil-player/perfil-player.module').then(m => m.PerfilPlayerPageModule)
          }
        ]
      },
      {
        path: 'addPlayer/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/add-player/add-player.module').then(m => m.AddPlayerPageModule)
          }
        ]
      },
      {
        path: 'addGame',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-game/add-game.module').then(m => m.AddGamePageModule)
          }
        ]
      },
      
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
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
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
