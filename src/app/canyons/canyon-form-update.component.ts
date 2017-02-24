import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

import { ICanyon, Canyon } from './canyon';
import { CanyonService } from './canyon.service';

@Component({
  selector: 'canyon-form-update',
  templateUrl: './canyon-form-update.component.html',
  styleUrls: ['./canyon-form-update.component.less']
})
export class CanyonFormUpdateComponent implements OnInit {

  @Output() update = new EventEmitter(false);
  @Input() canyon: Canyon; 
  
  files: FileList;
  isLoggedIn: boolean = false;
  
  constructor(
    private canyonService: CanyonService,
  ) {  }
  
  ngOnInit(): void {

  }
    
  submit(): void {
    if(this.files && this.files.length > 0) {
      let file = this.files[0];
      let storageRef = firebase.storage().ref();
      let uploadTask: firebase.storage.UploadTask = storageRef.child('images/'+file.name).put(file);
      uploadTask.on('state_changed', function(snapshot){
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function(error) {
      }, function() {
        // Handle successful uploads on complete
        var downloadURL = uploadTask.snapshot.downloadURL;
      }); 
      
      this.canyon.img = file.name;
    }

    if (this.canyon.name.length) {
      this.update.emit(this.canyon);
    }
  }

  onFileChange(event) {
    this.files = null;
    this.files = event.srcElement.files;    
  }
  
}
