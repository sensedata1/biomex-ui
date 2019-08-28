import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AdminComponent }   from './admin/admin.component';
import { SettingsComponent }   from './settings/settings.component';
//import { SearchResultsComponent } from './search-results/search-results.component';
//import { LoginComponent } from './login/login.component';
//import { AssetDetailComponent }  from './asset-detail/asset-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'settings', component: SettingsComponent }
 // { path:'search-results', component:SearchResultsComponent },
  //{ path:'login', component:LoginComponent }
  //{ path: 'detail/:id', component: AssetDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}