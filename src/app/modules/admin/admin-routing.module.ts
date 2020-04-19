import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './index/admin.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageExchangeComponent } from './manage-exchange/manage-exchange.component';
import { UpdateIPOComponent } from './update-ipo/update-ipo.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [],
    children: [
      {
        path: '',
        redirectTo: 'importData'
      },
      {
        path: 'importData',
        component: ImportDataComponent,
        pathMatch: 'full'
      },
      {
        path: 'manageCompany',
        component: ManageCompanyComponent,
        pathMatch: 'full'
      },
      {
        path: 'manageExchange',
        component: ManageExchangeComponent,
        pathMatch: 'full'
      },
      {
        path: 'updateIPO',
        component: UpdateIPOComponent,
        pathMatch: 'full'
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
export class AdminRoutingModule { }

