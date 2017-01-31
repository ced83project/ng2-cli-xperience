import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-canyons',
  templateUrl: './canyons.component.html',
  styleUrls: ['./canyons.component.css']
})
export class CanyonsComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }
  ngOnInit() {
  }

}
