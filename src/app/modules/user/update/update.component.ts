import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globals } from 'src/app/common';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  isProfile: boolean;
  username: string;
  email: string;
  mobile: string;
  oldPassword: string;
  newPassword: string;
  currentUser: any;

  constructor(
    public _activeRouter: ActivatedRoute,
    private _globals: Globals,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._activeRouter.queryParams.subscribe(params=> {
      let queryParams = params;
      this.isProfile = (queryParams.profile && queryParams.profile === 'true');
    })
    this.currentUser = this._globals.currentUser;
  }

  handleUpdatePassword() {
    if (this.oldPassword == this.newPassword) {
      let user = this.currentUser;
      user['password'] = this.newPassword;
      this._userService.updateUser(user).subscribe(data => {
        data => {

        }
      });
    } else {
      console.log('password is not same');
    }
  }

  handleCancelPassword() {
    this.oldPassword = this.newPassword = '';
  }

  handleUpdateProfile() {
    if (!!this.email || !!this.mobile || !!this.username) {
      let user = this.currentUser;
      user['username'] = this.username;
      user['mobile'] = this.mobile;
      user['email'] = this.email;
      this._userService.updateUser(user).subscribe(data => {
        data => {
          
        }
      });
    } else {
      console.log('');
    }
  }

  handleCancelProfile() {
    this.username = this.email = this.mobile = '';
  }

}
