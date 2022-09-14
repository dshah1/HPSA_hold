import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule,FormBuilder,FormControl } from '@angular/forms';

import{RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PorpertyDetailComponent } from './property/porperty-detail/porperty-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { HousingService } from './services/housing.service';
import { UserService } from './services/user.service';

const appRoutes: Routes = [
  {path:'', component:PropertyListComponent },
  {path:'user/Login', component:UserLoginComponent},
  {path:'user/Register', component:UserRegisterComponent},


  {path:'rent-property', component:PropertyListComponent },
  {path:'property-detail/:id', component:PorpertyDetailComponent},
  {path:'property-detail', component:PorpertyDetailComponent},

  {path: 'admin/settings', component:SettingsComponent},
  {path: 'admin/logout', component:LogoutComponent},
  {path: 'admin/reports', component:ReportsComponent},
  {path: 'admin/' , component:LogoutComponent},

  {path:'add-property', component:AddPropertyComponent },
  {path:'**', component:PropertyListComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PorpertyDetailComponent,
    UserLoginComponent,
 //   UserRegisterComponent,
    SettingsComponent,
    ReportsComponent,
    LogoutComponent
   ],

  imports: [    BrowserModule, HttpClientModule
            ,FormsModule, ReactiveFormsModule
    ,RouterModule.forRoot(appRoutes) ],
  providers: [
    HousingService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
