import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { Canyon, ICanyon } from './canyon';
import { CANYONS } from './mock-canyons';


@Injectable()
export class CanyonService {

  private canyons: FirebaseListObservable<ICanyon[]>;
  private canyon: FirebaseObjectObservable<ICanyon>;
  
  constructor(private af:AngularFire) {
    this.canyons = this.af.database.list('/canyons')
  }

  getAllCanyons(): Observable<ICanyon[]> {
    return this.canyons; 
  }
  getCanyonById(key: string): Observable<ICanyon> {
    return this.af.database.object('/canyons/'+key);
  }
  
  createCanyon(canyon: Canyon) {
    this.canyons.push(canyon);
  }
  
  update(canyon: ICanyon) {
    var key = canyon.$key;
    if (canyon.hasOwnProperty('$key')) {
      delete canyon['$key'];
    }
    if (canyon.hasOwnProperty('$value')) {
      delete canyon['$value'];
    }
    if (canyon.hasOwnProperty('$exists')) {
      delete canyon['$exists'];
    }
    canyon.icon = this.getCustomIcon(canyon.levelId);
    this.canyons.update(key, canyon);
  }
  
  push(canyon: ICanyon) {
    this.canyons.push(canyon);
  }
  
  remove(id: any) {
    this.canyons.remove(id);
  }

  getCustomIcon(levelId: string): string {
    if(levelId == "1") {
      return "assets/icons/maps/green/climbing.png";
    }
    if(levelId == "2") {
      return "assets/icons/maps/blue/climbing.png";
    }
    if(levelId == "3") {
      return "assets/icons/maps/red/climbing.png";
    }
  }
  
}
