import { Component, OnInit } from '@angular/core';
import { Broadcaster, EVENT_CONSTANT } from './common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  greeting: string;
  isShow = true;

  constructor(
    private _broadcast: Broadcaster,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    // this._broadcast.subscrible(EVENT_CONSTANT.GREETING, (data)=>{
    //   console.log(data);
    //   this.greeting = data;
    // });
    this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ).subscribe((nav) => {
      let snapShotUrl = this.router.url.toUpperCase();
      snapShotUrl.indexOf('/USER') > -1 ? this.greeting = 'Hi, User' : this.greeting = 'Hi, Admin';
      snapShotUrl.indexOf('/SIGNIN') > -1 || snapShotUrl.indexOf('/SIGNUP') > -1 ? this.isShow = false : this.isShow = true;
    })
  }

  logout() {
    this.router.navigate(['signin']);
  }
}
