import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../modules/login/sign-in/sign-in.component';
import { SignUpComponent } from '../modules/login/sign-up/sign-up.component';



const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {
    path: 'admin',
    loadChildren: 'app/modules/admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
