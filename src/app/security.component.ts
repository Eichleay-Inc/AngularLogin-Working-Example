import { Component, OnInit, Injectable, EventEmitter, Output } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Logger, AuthResponse } from 'msal';
import { HttpClient } from '@angular/common/http';
import { CookieService} from 'ngx-cookie-service';

@Injectable()
export class SecurityService {

  loggedIn = new EventEmitter<boolean>();
  isIframe = false;
  constructor(private broadcastService: BroadcastService, private authService: MsalService, private cookieService: CookieService) { }

  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;

    this.authService.handleRedirectCallback((authError, response) => {
      if (authError) {
        console.error('Redirect Error: ', authError.errorMessage);
        return;
      }

      console.log('Redirect Success: ', response.accessToken);
    });

  }


  login() {


    const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
    var request = {
      scopes: ["user.read"],
      loginHint: this.cookieService.get("EichleayUserName")
    }
    this.authService.acquireTokenSilent(request).then((accessTokenResponse)=>{
      this.registerLogOn(accessTokenResponse);
      
    }).catch(()=>{
      
        if (isIE) {
      this.authService.loginRedirect(request)
      this.loggedIn.emit(!!this.authService.getAccount());
      } else {
        this.authService.loginPopup(request).then((accessTokenResponse)=>{this.registerLogOn(accessTokenResponse);});
      }
    
    });

  }

  private registerLogOn(accessTokenResponse: AuthResponse)
  {
    this.cookieService.set('EichleayUserName', accessTokenResponse.account.userName, null, null, '.Eichleay.com');
    this.loggedIn.emit(!!this.authService.getAccount());
  }

  logout() {
    this.cookieService.delete('EichleayUserName', null, '.Eichleay.com');
    this.authService.logout();
    this.loggedIn.emit(!!this.authService.getAccount());
  }

}
