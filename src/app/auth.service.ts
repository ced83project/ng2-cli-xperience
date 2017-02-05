import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  user = {};
  
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
  
  doLoginWithGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google
    });
  }
  doLoginWithFacebook() {
    this.af.auth.login({
      provider: AuthProviders.Facebook
    });
  }
   
  doLogout() {
    this.af.auth.logout();
  }
  
}