import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './index/admin.component';
import { AdminGuard } from './admin-guard.service';
import { CompanyItemComponent } from './manage-company/company-item/company-item.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageExchangeComponent } from './manage-exchange/manage-exchange.component';
import { UpdateIPOComponent } from './update-ipo/update-ipo.component';
import { ExchangeItemComponent } from './manage-exchange/exchange-item/exchange-item.component';
import { IpoItemComponent } from './update-ipo/ipo-item/ipo-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    CompanyItemComponent,
    ManageCompanyComponent,
    UpdateIPOComponent,
    IpoItemComponent,
    ManageExchangeComponent,
    ExchangeItemComponent
  ],
  providers: [
    AdminGuard
  ]
})
export class AdminModule { }
