import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Location } from './location';

@Injectable()
export class LocationService {

  private locations$: FirebaseListObservable<Location[]>;

  constructor(private af:AngularFire) { }

  getAllLocations(): Observable<Location[]> {
    return this.af.database.list('/locations');
  }
  
}
