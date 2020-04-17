import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './index/user.component';
import { IPOComponent } from './ipo/ipo.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: IPOComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }

