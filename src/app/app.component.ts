import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Service } from './service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
//var Result: [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
}) 
export class AppComponent implements OnInit {
  title = 'MyAngularApp';
  isHome = true;
  isContact = false;
  isAbout = false;
  isLogin = false;

  sessionStarted = false;
  sessionDuration = 60; // Duration in seconds
  timeRemaining= 0;

  constructor(private router: Router){}

  async ngOnInit(){

    this.router.navigate(['CovidInfo']);
    this.timeRemaining = this.sessionDuration;
    //this.startSession();
  }

  ChangeActive(Active: string){
   if(Active === 'Home'){
    this.isHome = true;
    this.isContact = false;
    this.isAbout = false;
    this.isLogin = false;
   }
   else if(Active === 'Contact'){
    this.isHome = false;
    this.isContact = true;
    this.isAbout = false;
    this.isLogin = false;
   }
   else if(Active === 'Login'){
    this.isHome = false;
    this.isContact = false;
    this.isAbout = false;
    this.isLogin = true;
   }
   else {
    this.isHome = false;
    this.isContact = false;
    this.isAbout = true;
    this.isLogin = false;
   }

  }

  startSession() {
    this.sessionStarted = true;
    this.updateTimeRemaining();
  }

  updateTimeRemaining() {
    if (this.timeRemaining > 0) {
      setTimeout(() => {
        this.timeRemaining--;
        this.updateTimeRemaining();
      }, 1000);
    } else {
      this.endSession();
    }
  }
  endSession() {
    this.sessionStarted = false;
    this.timeRemaining = this.sessionDuration;
    //this.popupService.showPopup('Logout due to inactive', 'Dismiss', 3000);
    this.router.navigate(['/Login']);
    

  }
  
}
