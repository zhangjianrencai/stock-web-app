import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Broadcaster, EVENT_CONSTANT } from 'src/app/common';

const enum Tab {
  IPO = 'IPO',
  COMPAREDATA= 'COMPAREDATA',
  UPDATEPROFILE = 'UPDATEPROFILE',
  UPDATEPASSWORD = 'UPDATEPASSWORD'
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  currentTab: string;

  constructor(
    private router: Router,
    private _broadcast: Broadcaster
  ) { 
    this.currentTab = Tab.IPO;
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ).subscribe((nav) => {
      this.getCurrentTab(this.router.url);
    })
    this.getCurrentTab(this.router.url);
  }

  private getCurrentTab(url: string) {
    const currentUrlSnapshot = url.toUpperCase();
    if (currentUrlSnapshot.indexOf(Tab.IPO) > -1) {
      this.currentTab = Tab.IPO;
    } else if (currentUrlSnapshot.indexOf(Tab.COMPAREDATA) > -1) {
      this.currentTab = Tab.COMPAREDATA;
    } else if (currentUrlSnapshot.indexOf('PROFILE=FALSE') > -1) {
      this.currentTab = Tab.UPDATEPASSWORD;
    } else if (currentUrlSnapshot.indexOf('PROFILE=TRUE') > -1) {
      this.currentTab = Tab.UPDATEPROFILE;
    }
    return this.currentTab;
  }

}
