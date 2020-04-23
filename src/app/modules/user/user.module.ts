import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './index/user.component';
import { UserGuard } from './user-guard.service';
import { IPOComponent } from './ipo/ipo.component';
import { CompareDataComponent } from './compare-data/compare-data.component';
import { UpdateComponent } from './update/update.component';
import { UserIpoItemComponent } from './ipo/ipo-item/ipo-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    UserIpoItemComponent,
    IPOComponent,
    CompareDataComponent,
    UpdateComponent
  ],
  providers: [
    UserGuard
  ]
})
export class UserModule { }
