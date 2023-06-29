import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {PopupService} from '../app/popupService';

@Injectable({
    providedIn: 'root'
  })

export class Service {

    constructor(private httpClient: HttpClient, private popupService: PopupService) { }


    async generateCovid(){
      
      const httpHeaders = new HttpHeaders ();
      httpHeaders.append('X-RapidAPI-Key','fecaf35dd3mshd41d4331cb7de52p1df6d7jsnbba51a6e3214');
      httpHeaders.append('X-RapidAPI-Host','covid-193.p.rapidapi.com');
  
     
      return this.httpClient.get('https://covid-193.p.rapidapi.com/statistics',
      {headers: 
        {'X-RapidAPI-Key':'fecaf35dd3mshd41d4331cb7de52p1df6d7jsnbba51a6e3214'
      ,'X-RapidAPI-Host':'covid-193.p.rapidapi.com'}}
      );
      
   console.log(httpHeaders);
  
    }    

    async checkLogin(username:string, password:string){

      let headers= new HttpHeaders()
      .set('Content-Type','application/json');

      let body= {
        username: username,
        password: password

      };

      let params = new HttpParams()
      .set('username',username)
      .set('password',password);

    

     return this.httpClient.get<any>('http://localhost:3000/checkLoginStatus',{headers, params});
    
  }
}