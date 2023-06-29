import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { AboutComponent } from './about/about.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';
import { LoginComponent } from './login/login.component';
import { UsermainComponent } from './usermain/usermain.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AboutComponent,
    CovidInfoComponent,
    LoginComponent,
    UsermainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    [MdbCarouselModule],
    [MatSnackBarModule],
    [BrowserAnimationsModule]
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

                             
 }
