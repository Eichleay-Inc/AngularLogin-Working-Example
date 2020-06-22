import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {appRoutes} from './app.routes'
import {MsalModule} from "@azure/msal-angular";
import { MsalInterceptor} from "@azure/msal-angular";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import {DxChartModule} from 'devextreme-angular';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SecurityService} from './security.component'
import { CookieService } from 'ngx-cookie-service';

export function loggerCallback(logLevel, message, piiEnabled) {
  console.log("client logging" + message);
}


export const protectedResourceMap:[string, string[]][]=[ ['https://buildtodoservice.azurewebsites.net/api/todolist',['api://3a08964c-1608-482c-823f-af0adb49c638/access_as_user']] , ['https://graph.microsoft.com/v1.0/me', ['user.read']] ];
const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;


@NgModule({
  declarations: [
    AppComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    DxChartModule,
    RouterModule.forRoot(appRoutes,{useHash:true}) ,
    MsalModule.forRoot({
      auth: {
        clientId: '3a08964c-1608-482c-823f-af0adb49c638',
        authority: "https://login.microsoftonline.com/eichleay.com",
        validateAuthority: true,
        redirectUri: "http://localhost:4200",
        postLogoutRedirectUri: "http://localhost:4200",
        // redirectUri: "https://ts-sso-example.azurewebsites.net",
        // postLogoutRedirectUri: "https://ts-sso-example.azurewebsites.net",
        navigateToLoginRequestUrl: true,
      },
      
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: isIE, // set to true for IE 11
      },
    },
    {
      popUp: !isIE,
      consentScopes: [
        "user.read",
        "openid",
        "profile",
        "api://3a08964c-1608-482c-823f-af0adb49c638/access_as_user"
      ],
      unprotectedResources: ["https://www.microsoft.com/en-us/"],
      protectedResourceMap,
      
      extraQueryParameters: {}
    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MsalInterceptor,
    multi: true
    }, 
    SecurityService,
    CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
