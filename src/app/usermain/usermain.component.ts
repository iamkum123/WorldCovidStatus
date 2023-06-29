import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {PopupService} from '../popupService';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-usermain',
  templateUrl: './usermain.component.html',
  styleUrls: ['./usermain.component.scss']
})
export class UsermainComponent implements OnInit {

  username: string|null='';
  sessionStarted = false;
  sessionDuration = 60; // Duration in seconds
  timeRemaining= 0;

  constructor(private route: ActivatedRoute,private router: Router,private popupService: PopupService, private AppComponent: AppComponent) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.username = params.get('value');
    });
    this.timeRemaining = this.sessionDuration;

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
    this.popupService.showPopup('Logout due to inactive', 'Dismiss', 3000);
    this.router.navigate(['/Login']);
    

  }

  logout(){
    this.router.navigate(['/Login']);
    this.AppComponent.endSession();

  }


}
