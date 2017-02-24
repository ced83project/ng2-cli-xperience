import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { Canyon } from "../canyons/canyon";

@Component({
    selector: 'map-info',
    templateUrl: 'map-info.component.html',
    styleUrls: ['./map-info.component.less']
})

export class MapInfoComponent {
    @Input() canyon: Canyon;

    private _imageUrl: string;
    constructor( ) {
        this._imageUrl = "/assets/img/loading.gif";
    }

    ngOnInit(): void {
        let that = this;
        var storageRef = firebase.storage().ref();
        var imgRef = storageRef.child('images/'+this.canyon.img);
        imgRef.getDownloadURL().then(
            function (downloadUrl) {
                that._imageUrl = downloadUrl;
            }).catch(function(error) {
            });
    }

    getCardClass (levelId: string): string { 
      if(levelId === "1") {
        return "media activity activity-card activity-card-success";
      } 
      if(levelId === "2") {
        return "media activity activity-card activity-card-primary";
      } 
      if(levelId === "3") {
        return "media activity activity-card activity-card-danger";
      } 
    }
    getButtonClass (levelId: string): string {
      if(levelId === "1") {
        return "btn btn-secondary";
      } 
      if(levelId === "2") {
        return "btn btn-primary";
      } 
      if(levelId === "3") {
        return "btn btn-danger";
      } 
    }
    
    imageUrl(): string {
      return this._imageUrl;
    }
    getBackgroundStyle(): string {
      var style = 'url("' + this.imageUrl() + '") 0% 0% / cover';
      return style;
    }
    
}