import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { Canyon } from './canyon';
import { CANYONS } from './mock-canyons';


@Injectable()
export class CanyonService {

  private canyons: FirebaseListObservable<Canyon[]>;
  private canyon: FirebaseObjectObservable<Canyon>;
  
  constructor(private af:AngularFire) {
    this.canyons = this.af.database.list('/canyons')
  }

  getAllCanyons(): Observable<Canyon[]> {
    return this.canyons; 
  }
  getCanyonById(key: string): Observable<Canyon> {
    return this.af.database.object('/canyons/'+key);
  }
  
  save(canyon: Canyon) {
    if (canyon.hasOwnProperty('$key')) {
      var key = canyon.$key;
      delete canyon.$key;
      if (canyon.hasOwnProperty('$exists')) {
        delete canyon.$exists;
      }
      if (canyon.hasOwnProperty('$value')) {
        delete canyon.$value;
      }
      this.canyons.update(key, canyon);
    } else {
      this.canyons.push(canyon);
    }
  }
  
  remove(id:any) {
    this.canyons.remove(id);
  }
  
}
