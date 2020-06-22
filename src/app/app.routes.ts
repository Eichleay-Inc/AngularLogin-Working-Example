import { Routes } from '@angular/router';
import {MsalGuard} from "@azure/msal-angular";
import { DashboardComponent} from './dashboard/dashboard.component'
import {ProfileComponent} from "./profile/profile.component"

export const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'profile',component: ProfileComponent,canActivate: [MsalGuard]}
];




