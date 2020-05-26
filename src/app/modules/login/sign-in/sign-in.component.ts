import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LOCAL_STG_CONSTANT, Globals, USER_TYPE } from 'src/app/common';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-compnent',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private globals: Globals
  ) { }

  ngOnInit(): void {
  }

  public handleSignIn(): void {
    const user = {
      username: this.username,
      password: this.password
    }
    this.userService.authToken(user).subscribe(success=>{
      localStorage.setItem(LOCAL_STG_CONSTANT.STOCK_AUTH_TOKEN_lOCAL, success.id_token);
      this.userService.getCurrentUser().subscribe(
        data => {
          this.globals.currentUser = data;
          if (data.userType == USER_TYPE.USER) {
            this.router.navigate(['user/ipo']);
          } else {
            this.router.navigate(['admin/importData']);
          }
        }, error => {
          console.log('get user error');
        }
      );
      
    },error=>{
      console.log('failure');
    });
  }

}
