import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import * as firebase from 'firebase';

import { Canyon } from "./canyon";


@Component({
    selector: 'canyon-card',
    templateUrl: 'canyon-card.component.html',
    styleUrls: ['./canyon-card.component.less']
})


export class CanyonCardComponent {
    @Input() canyon: Canyon;
    @Input() isLoggedIn: boolean;
    
    @Output() select = new EventEmitter(false);
    @Output() delete = new EventEmitter(false);
    @Output() update = new EventEmitter(false);
    
    editing: boolean = false;    
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
                //console.error(error);
                /*
                 switch (error.code) {
                 case 'storage/object_not_found':
                 // File doesn't exist
                 break;
                 case 'storage/unauthorized':
                 // User doesn't have permission to access the object
                 break;
                 case 'storage/canceled':
                 // User canceled the upload
                 break;
                 case 'storage/unknown':
                 // Unknown error occurred, inspect the server response
                 break;
                 }
                 */
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
    
    startEdit():void {
      this.editing = true;
    }
    saveEdit(canyon: Canyon):void {
      this.editing = false;
      this.update.emit(canyon);
    }

    onUpdate(canyon: Canyon): void {
      this.update.emit(canyon);
    }
    onDelete(canyon: Canyon): void {
      this.delete.emit(canyon);
    }  
    onSelect(canyon: Canyon): void {
      this.select.emit(canyon);
    }

}