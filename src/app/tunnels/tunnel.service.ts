import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Tunnel } from './tunnel';
import { TUNNELS } from './mock-tunnels';


@Injectable()
export class TunnelService {

  private tunnels$: FirebaseListObservable<Tunnel[]>;

  constructor(private af:AngularFire) { }

  getAllTunnels(): Observable<Tunnel[]> {
    return this.af.database.list('/tunnels');
  }
  
}
