import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardReposComponent } from './card-repos/card-repos.component';
import { CardUserComponent } from './card-user/card-user.component';

const routes: Routes = [
  {
    path: 'userslist',
    component: CardUserComponent
  },
  {
    path: '',
    redirectTo: '/userslist',
    pathMatch: 'full'
  },
  {
    path: 'reposlist/:owner',
    component: CardReposComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
