import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile1',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'profile1', loadChildren: './profile1/profile1.module#Profile1PageModule' },
  { path: 'profile2', loadChildren: './profile2/profile2.module#Profile2PageModule' },
  { path: 'profile3', loadChildren: './profile3/profile3.module#Profile3PageModule' },
  { path: 'profile4', loadChildren: './profile4/profile4.module#Profile4PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
