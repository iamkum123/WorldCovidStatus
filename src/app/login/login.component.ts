import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Router } from '@angular/router';
import {PopupService} from '../popupService';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showSpinner= false;
  username='';
  password='';

  constructor(private user:Service,private http:HttpClient, private router: Router,
    private popupService: PopupService, private AppComponent: AppComponent) { 
   
  }

  ngOnInit(): void {
    if(this.AppComponent.sessionStarted===true){
      this.router.navigate(['/Usermain']);
    }
  }

  async checkLogin(){
     (await this.user.checkLogin(this.username ,this.password)).subscribe((data: any)=>{
     if(!data){
      console.log('invalid user');
      this.popupService.showPopup('Invalid login credentials!', 'Dismiss', 3000);
     }
     else{
      console.log('valid user '+ data.username);
      this.router.navigate(['/Usermain', {value: data.username}]);
      this.popupService.showPopup('Welcome back! ' + data.username, 'Dismiss', 3000);
      this.AppComponent.startSession();

     }

      },(error)=>{
        this.popupService.showPopup('Something is not right, please contact admin', 'Dismiss', 3000);

      });
  }
  }   

  

