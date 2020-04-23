import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterStateSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';
import { EVENT_CONSTANT } from 'src/app/common';


const enum Tab {
  IMPORTDATA = 'IMPORTDATA',
  MANAGECOMPANY= 'MANAGECOMPANY',
  MANAGEEXCHANGE = 'MANAGEEXCHANGE',
  UPDATEIPO = 'UPDATEIPO'
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {

  currentTab: string;

  constructor(
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    this.getCurrentTab(this.router.url);
    this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ).subscribe((nav) => {
      this.getCurrentTab(this.router.url);
    })
  }

  private getCurrentTab(url: string) {
    const currentUrlSnapshot = url.toUpperCase();
    if (currentUrlSnapshot.indexOf(Tab.IMPORTDATA) > -1) {
      this.currentTab = Tab.IMPORTDATA;
    } else if (currentUrlSnapshot.indexOf(Tab.MANAGECOMPANY) > -1) {
      this.currentTab = Tab.MANAGECOMPANY;
    } else if (currentUrlSnapshot.indexOf(Tab.MANAGEEXCHANGE) > -1) {
      this.currentTab = Tab.MANAGEEXCHANGE;
    } else if (currentUrlSnapshot.indexOf(Tab.UPDATEIPO) > -1) {
      this.currentTab = Tab.UPDATEIPO;
    }
    return this.currentTab;
  }
}





