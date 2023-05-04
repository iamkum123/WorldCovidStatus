import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })

export class Service {

    constructor(private httpClient: HttpClient) { }


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
}