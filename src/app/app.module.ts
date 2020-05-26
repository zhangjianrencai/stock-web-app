import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './common/app-routing.module';
import { AppComponent } from './app.component';

import { Globals, AuthGuard, StockHttpInterceptor, Broadcaster, UtilsService } from './common/index';

import { SignUpComponent } from './modules/login/sign-up/sign-up.component';
import { SignInComponent } from './modules/login/sign-in/sign-in.component';
import { MCModalContent } from './directives/modal/manage-company-modal/manage-company-modal.component';
import { MEModalContent } from './directives/modal/manage-exchange-modal/manage-exchange-modal.component';
import { UIModalContent } from './directives/modal/update-ipo-modal/update-ipo-modal.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IDModalContent } from './directives/modal/import-data-modal/import-data-modal.component';
import { UserService } from './services/user.service';
import { BusinessService } from './services/business.service';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    MCModalContent,
    MEModalContent,
    UIModalContent,
    IDModalContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StockHttpInterceptor,
      multi: true
    },
    Globals,
    AuthGuard,
    Broadcaster,
    UtilsService,
    UserService,
    BusinessService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    MCModalContent,
    MEModalContent,
    UIModalContent,
    IDModalContent
  ]
})
export class AppModule { }
