import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: 'intro', loadChildren: () => import('./intro/intro.module').then(m => m.IntroModule), data: { name: 'intro'}  },
  { path: 'form',  loadChildren: () => import('./form/form.module').then(m => m.FormModule), data: { name: 'form'} },
  { path: 'conclusion',  loadChildren: () => import('./conclusion/conclusion.module').then(m => m.ConclusionModule), data: { name: 'conclusion'} },
  { path: '', redirectTo: '/intro', pathMatch: 'full',  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
