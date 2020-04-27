import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in-compnent',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  public handleSignIn(): void {
    this.userService.getUserInfo('1').subscribe(success=>{
      console.log('success');
    },error=>{
      console.log('failure');
    });
  }

}
