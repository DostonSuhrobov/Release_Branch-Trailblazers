import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MembershipComponent } from './membership/membership.component';
import { WithoutpermissionComponent } from './membership/withoutpermission/withoutpermission/withoutpermission.component';
import { StandardComponent } from './membership/standard/standard.component';

import { JwtInterceptor } from './authInterceptor/JwtInterceptor';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MembershipComponent,
    WithoutpermissionComponent,
    StandardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
