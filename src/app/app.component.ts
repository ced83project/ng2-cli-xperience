import { Component } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public isLoggedIn: boolean;
  public user = {};
  
  constructor( public af: AngularFire ) { 
    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.isLoggedIn = true;
        this.user = user;
      }
      else {
        // user not logged in
        this.isLoggedIn = false;
        this.user = {};
      }
    });
    
  }
  
  login() {
    this.af.auth.login({
      provider: AuthProviders.Facebook
    });
  }
   
  logout() {
    this.af.auth.logout();
  }
  
  
}
