import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { 
  AngularFireModule, 
  AuthMethods, 
  AuthProviders 
} from "angularfire2";

import { AgmCoreModule } from 'angular2-google-maps/core';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService }     from './auth.service';
import { HomeComponent } from './home/home.component';
import { MapInfoComponent } from './home/map-info.component';
import { LocationService }     from './home/location.service';
import { CanyonsComponent } from './canyons/canyons.component';
import { CanyonCardComponent } from './canyons/canyon-card.component';
import { CanyonFormAddComponent } from './canyons/canyon-form-add.component';
import { CanyonFormUpdateComponent } from './canyons/canyon-form-update.component';
import { CanyonService }     from './canyons/canyon.service';
import { CanyonLevelFilter } from './canyons/canyon.pipe';
import { TunnelsComponent } from './tunnels/tunnels.component';
import { TunnelService }     from './tunnels/tunnel.service';
import { TunnelLevelFilter } from './tunnels/tunnel.pipe';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyAVb8ZIGpxskVne4Zxumgl5d6Mupr_E2Zg",
  authDomain: "ng2-cli-xperience.firebaseapp.com",
  databaseURL: "https://ng2-cli-xperience.firebaseio.com",
  storageBucket: "ng2-cli-xperience.appspot.com",
  messagingSenderId: "511423852212"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapInfoComponent,
    CanyonsComponent,
    CanyonCardComponent,
    CanyonFormAddComponent,
    CanyonFormUpdateComponent,
    CanyonLevelFilter,
    TunnelsComponent,
    TunnelLevelFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAi-K8q65y2MxD_nTmAvcDRy9tL8RNF3Gs'
    }),
    Ng2Bs3ModalModule
  ],
  providers: [
    AuthService, 
    LocationService, 
    CanyonService, 
    TunnelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
