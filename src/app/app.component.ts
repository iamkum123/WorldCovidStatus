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

  constructor(private router: Router){}

  async ngOnInit(){

    this.router.navigate(['CovidInfo']);
  }

  ChangeActive(Active: string){
   if(Active === 'Home'){
    this.isHome = true;
    this.isContact = false;
    this.isAbout = false;
   }
   else if(Active === 'Contact'){
    this.isHome = false;
    this.isContact = true;
    this.isAbout = false;
   }
   else {
    this.isHome = false;
    this.isContact = false;
    this.isAbout = true;
   }

  }
  
}
