import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  isProfile: boolean;
  username: string;
  email: string;
  mobileNumber: string;
  oldPassword: string;
  newPassword: string;

  constructor(
    public _activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activeRouter.queryParams.subscribe(params=> {
      let queryParams = params;
      this.isProfile = (queryParams.profile && queryParams.profile === 'true');
    })
  }

  handleUpdatePassword() {

  }

  handleCancelPassword() {
  }

  handleUpdateProfile() {

  }

  handleCancelProfile() {

  }

}
