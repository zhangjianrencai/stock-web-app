import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './index/user.component';
import { IPOComponent } from './ipo/ipo.component';
import { CompareDataComponent } from './compare-data/compare-data.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [],
    children: [
      {
        path: '',
        redirectTo: 'ipo'
      },
      {
        path: 'ipo',
        pathMatch: 'full',
        component: IPOComponent
      },
      {
        path: 'compareData',
        pathMatch: 'full',
        component: CompareDataComponent
      },
      {
        path: 'update',
        pathMatch: 'full',
        component: UpdateComponent
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

