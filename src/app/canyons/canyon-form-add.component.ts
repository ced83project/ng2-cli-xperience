import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';

import { ICanyon, Canyon } from './canyon';
import { CanyonService } from './canyon.service';

@Component({
  selector: 'canyon-form-add',
  templateUrl: './canyon-form-add.component.html',
  styleUrls: ['./canyon-form-add.component.less']
})
export class CanyonFormAddComponent implements OnInit {

  @Output() createCanyon = new EventEmitter(false);
  
  canyon: Canyon = new Canyon();
  
  files: FileList;
  isLoggedIn: boolean = false;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private canyonService: CanyonService,
    public af: AngularFire
  ) {
  
    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.isLoggedIn = true;
      }
      else {
        // user not logged in
        this.isLoggedIn = false;
      }
    });
   
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd){
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          // you can use DomAdapter
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(element); }
        }
        else {
          window.scrollTo(0,0);
        }
      }
    });
  }
  
  ngOnInit(): void {
  /*
    this.route.params
      .switchMap((params: Params) => this.canyonService.getCanyonById(params['id']))
      .subscribe(canyon => this.canyon = canyon);
      */
  }

    
  clearData(): void {
    this.canyon.clear();
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
      this.createCanyon.emit(this.canyon);
    }
    this.clearData();
  }

  onFileChange(event) {
    this.files = null;
    this.files = event.srcElement.files;    
  }
  
}
