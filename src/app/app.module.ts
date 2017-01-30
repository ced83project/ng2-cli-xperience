import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyAVb8ZIGpxskVne4Zxumgl5d6Mupr_E2Zg",
  authDomain: "ng2-cli-xperience.firebaseapp.com",
  databaseURL: "https://ng2-cli-xperience.firebaseio.com",
  storageBucket: "ng2-cli-xperience.appspot.com",
  messagingSenderId: "511423852212"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
