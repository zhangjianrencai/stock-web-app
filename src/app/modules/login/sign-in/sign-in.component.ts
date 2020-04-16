import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-compnent',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public username: string;
  public password: string;

  constructor() { }

  ngOnInit(): void {
  }

  public handleSignIn(): void {

  }

}
