import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Service } from './service';
import { FormsModule } from '@angular/forms';
//var Result: [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
}) 
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['country', 'population', 'cases', 'deaths'];
  title = 'MyAngularApp';
  Result: any[]=[];
  searchResult: any []=[];
  day: string='';
  Country : string ='';
  casePerc: string ='';
  constructor(private user:Service){}

  async ngOnInit(){
    this.getResult('');

  }

  async SearchCountry(country: string){
    await this.getResult(country);
console.log(country);
  }

 async getResult(country:string){

    (await this.user.generateCovid()).pipe().subscribe( (data: any)=>{
      if(!country){
        this.Result = data.response;
        this.day = data.response[1].day;
        console.log(this.Result);
        }
      else{
        
        this.Result = data.response;
        this.searchResult = [];
        this.Result.forEach(element => {
          if(element.country.toUpperCase().match (country.toUpperCase())){
              this.searchResult.push(element);
    
          }
          this.Result = this.searchResult;
          if(!this.searchResult){
            this.Result =[];
          }
        });
      }

      this.Result.forEach(e=>{
        this.casePerc =  (e.cases.total/e.population*100).toFixed(2);
        console.log(this.casePerc);
        e.PERC = this.casePerc;
        console.log(e);

      });
  }
  )
  }
  
}
