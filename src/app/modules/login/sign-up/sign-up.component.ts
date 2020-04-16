import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.userType = "0";
  }


  public handleTypeChange():void {
    console.log(this.userType);
  }

  public handleSignUp(): void {

  }

}
