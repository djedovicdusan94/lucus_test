import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';
import { AnonymousGuard } from './_guards/anonymous.guard';

const routes: Routes = [
  {
    path: 'page1',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./page1/page1.module').then((m) => m.Page1Module),
  },
  {
    path: 'page2',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./page2/page2.module').then((m) => m.Page2Module),
  },
  {
    path: 'page3',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./page3/page3.module').then((m) => m.Page3Module),
  },
  {
    path: 'page4',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./page4/page4.module').then((m) => m.Page4Module),
  },
  {
    path: 'identity',
    canActivate: [AnonymousGuard],
    loadChildren: () =>
      import('./identity/identity.module').then((m) => m.IdentityModule),
  },
  {
    path: '**',
    redirectTo: 'page1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // Preload for better performance
      // Only needed to be defined on the root level
      { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
