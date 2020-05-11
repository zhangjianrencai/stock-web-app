import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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
  public mobileNumber: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userType = '0';
  }


  public handleTypeChange(): void {
    console.log(this.userType);
  }

  public handleSignUp(): void {
    const user = {
      userName: this.username,
      password: this.password,
      userType: this.userType,
      email: this.email,
      mobileNumber: this.mobileNumber
    };

    this.userService.saveUserInfo(user).subscribe(success => {
      console.log('success');
    },
    error => {
      console.log('failure');
    });
  }

}
