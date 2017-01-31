import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CanyonsComponent } from './canyons/canyons.component';
import { CanyonService }     from './canyons/canyon.service';
import { CanyonLevelFilter } from './canyons/canyon.pipe';

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
    AppComponent,
    HomeComponent,
    CanyonsComponent,
    CanyonLevelFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [CanyonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
