import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PixelAvatarComponent } from './components/pixel-avatar/pixel-avatar.component';
import { SportsComponent } from './components/sports/sports.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'sports',
    component: SportsComponent,
  },
  {
    path: 'pixel-avatar',
    component: PixelAvatarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRouting { }
