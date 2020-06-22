import { Component, OnInit, Input } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Logger } from 'msal';
import { HttpClient } from '@angular/common/http';

import { Guid } from "guid-typescript";
import { SecurityService } from './security.component';
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  title = 'angular-playground';
  isIframe = false;
  loggedIn = false;
  constructor(private broadcastService: BroadcastService, private authService: MsalService, private securityService: SecurityService) { }

  ngOnInit() {
    // this.isIframe = window !== window.parent && !window.opener;

    // this.checkoutAccount();

    // this.broadcastService.subscribe('msal:loginSuccess', () => {
    //   this.checkoutAccount();
    // });

    // this.authService.handleRedirectCallback((authError, response) => {
    //   if (authError) {
    //     console.error('Redirect Error: ', authError.errorMessage);
    //     return;
    //   }

    //   console.log('Redirect Success: ', response.accessToken);
    // });

    // this.authService.setLogger(new Logger((logLevel, message, piiEnabled) => {
    //   console.log('MSAL Logging: ', message);
    // }, {
    //   correlationId: Guid.create().toString(),
    //   piiLoggingEnabled: false
    // }));
   // debugger;
    this.securityService.login();
    // this.loggedIn = this.securityService.loggedIn;
    this.securityService.loggedIn.subscribe((logStatus) => {
      this.loggedIn = logStatus;
    });
  }

  // checkoutAccount() {
  //   // const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
  //   // var request = {
  //   //   scopes: ["user.read"],
  //   //   loginHint: "jon.steven@eichleay.com"
  //   // }
  //   // this.authService.acquireTokenSilent(request);

  //   // this.loggedIn = this.securityService.checkoutAccount() != null;
  //   // this.loggedIn = !!this.authService.getAccount();
    
  // }

  login() {
    this.securityService.login();
    //this.loggedIn = this.securityService.loggedIn;

    // if (isIE) {
    //   this.authService.loginRedirect();
    // } else {
    //   this.authService.loginPopup();
    // }
  }

  logout() {
    this.securityService.logout();
  //  this.loggedIn = this.securityService.loggedIn;
  }

}
