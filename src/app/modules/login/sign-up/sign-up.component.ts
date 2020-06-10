import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Globals } from 'src/app/common';

@Component({
  selector: 'app-sign-up-compnent',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public userType: string;
  public username: string;
  public password: string;
  public email: string;
  public mobile: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private globals: Globals
  ) { }

  ngOnInit(): void {
    this.userType = '0';
  }


  public handleTypeChange(): void {
    console.log(this.userType);
  }

  public handleSignUp(): void {
    const user = {
      username: this.username,
      password: this.password,
      userType: this.userType,
      email: this.email,
      mobile: this.mobile
    };
    this.userService.regist(user).subscribe(success => {
      this.globals.currentUser = success;
      this.globals.currentUser['password'] = this.password;
      if (this.userType == '0') {
        this.router.navigate(['user/ipo']);
      } else {
        this.router.navigate(['admin/importData']);
      }
    },
    error => {
      console.log('failure');
    });
  }

}
