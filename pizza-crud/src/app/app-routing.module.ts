import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)},
  { path: 'pizza-detail/:id', loadChildren: () => import('./pizza-detail/pizza-detail.module').then(m => m.PizzaDetailPageModule)},
  { path: 'pizza-add', loadChildren: () => import('./pizza-add/pizza-add.module').then(m => m.PizzaAddPageModule)},
  { path: 'pizza-edit/:id', loadChildren: () => import('./pizza-edit/pizza-edit.module').then(m => m.PizzaEditPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
